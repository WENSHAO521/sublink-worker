export class UpstashKVAdapter {
    constructor({ url, token }) {
        if (!url || !token) {
            throw new Error('Upstash KV adapter requires KV_REST_API_URL and KV_REST_API_TOKEN');
        }
        this.url = url.replace(/\/$/, '');
        this.token = token;
    }

    async get(key) {
        const result = await this.execute(['GET', key]);
        return result ?? null;
    }

    async put(key, value, options = {}) {
        const command = ['SET', key, value];
        const ttl = normalizeTtl(options.expirationTtl);
        if (ttl !== null) {
            command.push('EX', String(ttl));
        }
        await this.execute(command);
    }

    async delete(key) {
        await this.execute(['DEL', key]);
    }

    async execute(command) {
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(command)
        });

        if (!response.ok) {
            throw new Error(`Upstash request failed with status ${response.status}`);
        }

        const payload = await response.json();
        if (payload.error) {
            throw new Error(`Upstash error: ${payload.error}`);
        }
        return payload.result;
    }
}

function normalizeTtl(ttl) {
    if (!ttl && ttl !== 0) return null;
    const parsed = Math.floor(Number(ttl));
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}
