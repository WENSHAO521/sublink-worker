/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */

const LINK_ITEMS = [
    { key: 'xray',    labelKey: 'xrayLink'    },
    { key: 'singbox', labelKey: 'singboxLink' },
    { key: 'clash',   labelKey: 'clashLink'   },
    { key: 'surge',   labelKey: 'surgeLink'   },
];

export const SubscribeLinks = (props) => {
    const { t, links } = props;
    if (!links) return null;

    return (
        <div x-data="{ copied: null }" class="glass-card p-6 mb-8">
            <h2 class="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2.5 mb-5">
                <span class="w-7 h-7 rounded-lg section-icon flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-link text-xs"></i>
                </span>
                {t('subscriptionLinks')}
            </h2>

            <div class="space-y-3">
                {LINK_ITEMS.map(({ key, labelKey }) => (
                    <div class="relative group" key={key}>
                        <label class="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
                            {t(labelKey)}
                        </label>
                        <div class="flex gap-2">
                            <input
                                type="text"
                                readonly
                                value={links[key]}
                                class="glass-input w-full px-3.5 py-2 rounded-xl text-gray-700 dark:text-gray-300 font-mono text-xs"
                            />
                            <button
                                type="button"
                                x-on:click={`$clipboard('${links[key]}'); copied = '${key}'; setTimeout(() => copied = null, 2000)`}
                                class="px-3.5 py-2 glass-btn-secondary rounded-xl text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 flex-shrink-0 transition-colors"
                                x-bind:class={`copied === '${key}' ? 'text-psg-green dark:text-psg-green' : ''`}
                            >
                                <i class="fas text-sm" x-bind:class={`copied === '${key}' ? 'fa-check' : 'fa-copy'`}></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
