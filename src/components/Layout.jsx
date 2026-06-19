import { html } from 'hono/html'
import { APP_KEYWORDS, APP_FULL_NAME } from '../constants.js';

export const Layout = (props) => {
  const { title, children } = props
  return html`
    <!DOCTYPE html>
    <html lang="en" x-data="appData()">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <meta name="description" content="${APP_FULL_NAME} — Convert and optimize your subscription links" />
        <meta name="keywords" content="${APP_KEYWORDS}" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.10/dist/cdn.min.js" onerror="window.__alpineFailed=true"></script>
        <script>
          window.__alpineLoaded = false;
          document.addEventListener('alpine:init', () => { window.__alpineLoaded = true; });
          window.addEventListener('DOMContentLoaded', () => {
            if (window.__alpineFailed || !window.__alpineLoaded) {
              console.error('Failed to initialize Alpine.js. Interactive features are disabled.');
              const warning = document.createElement('div');
              warning.className = 'fixed bottom-4 right-4 bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-lg shadow';
              warning.textContent = '加载 Alpine.js 失败，页面交互功能不可用，请刷新或检查网络。';
              document.body.appendChild(warning);
            }
          });
        </script>
        <script>
          tailwind.config = {
            darkMode: 'class',
            theme: {
              extend: {
                colors: {
                  primary: {
                    50:  '#EBF5FF',
                    100: '#D6EAFF',
                    200: '#ADD6FF',
                    300: '#70B8FF',
                    400: '#3D9FFF',
                    500: '#007AFF',
                    600: '#0063CC',
                    700: '#004EA3',
                    800: '#003B7A',
                    900: '#002851',
                    950: '#001533',
                  },
                  psg: {
                    purple: '#5856D6',
                    teal:   '#5AC8FA',
                    green:  '#30D158',
                  }
                },
                fontFamily: {
                  sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Segoe UI"', 'Inter', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
                },
                borderRadius: {
                  '4xl': '2rem',
                },
                backdropBlur: {
                  '2xl': '40px',
                  '3xl': '60px',
                }
              }
            }
          }
        </script>
        <style>
          /* ── Base ── */
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            min-height: 100vh;
            background-color: #F2F2F7;
          }
          html.dark body { background-color: #000000; }

          /* ── Ambient gradient orbs ── */
          body::before {
            content: '';
            position: fixed;
            inset: 0;
            z-index: -2;
            pointer-events: none;
            background:
              radial-gradient(ellipse 130% 80% at 50% -20%, rgba(0,122,255,0.14) 0%, transparent 65%),
              radial-gradient(ellipse 80%  60% at 95% 110%, rgba(88,86,214,0.10) 0%, transparent 55%),
              radial-gradient(ellipse 60%  50% at  0% 80%,  rgba(90,200,250,0.07) 0%, transparent 50%);
          }
          html.dark body::before {
            background:
              radial-gradient(ellipse 130% 80% at 50% -20%, rgba(0,122,255,0.22) 0%, transparent 65%),
              radial-gradient(ellipse 80%  60% at 95% 110%, rgba(88,86,214,0.18) 0%, transparent 55%),
              radial-gradient(ellipse 60%  50% at  0% 80%,  rgba(90,200,250,0.10) 0%, transparent 50%);
          }

          /* ── Glass cards ── */
          .glass-card {
            background: rgba(255,255,255,0.72);
            backdrop-filter: saturate(180%) blur(20px);
            -webkit-backdrop-filter: saturate(180%) blur(20px);
            border: 1px solid rgba(0,0,0,0.06);
            box-shadow: 0 2px 24px rgba(0,0,0,0.06), 0 0 0 0.5px rgba(255,255,255,0.8) inset;
            border-radius: 1.25rem;
            transition: box-shadow 0.25s ease, transform 0.25s ease;
          }
          .glass-card:hover {
            box-shadow: 0 6px 36px rgba(0,0,0,0.10), 0 0 0 0.5px rgba(255,255,255,0.9) inset;
          }
          html.dark .glass-card {
            background: rgba(28,28,30,0.75);
            border: 1px solid rgba(255,255,255,0.08);
            box-shadow: 0 2px 24px rgba(0,0,0,0.45);
          }
          html.dark .glass-card:hover {
            box-shadow: 0 6px 36px rgba(0,0,0,0.60);
          }

          /* ── Glass navbar ── */
          .glass-nav {
            background: rgba(242,242,247,0.85);
            backdrop-filter: saturate(180%) blur(28px);
            -webkit-backdrop-filter: saturate(180%) blur(28px);
            border-bottom: 1px solid rgba(0,0,0,0.07);
          }
          html.dark .glass-nav {
            background: rgba(0,0,0,0.75);
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }

          /* ── Glass inputs ── */
          .glass-input {
            background: rgba(255,255,255,0.55);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(0,0,0,0.10);
            transition: border-color 0.2s, box-shadow 0.2s;
          }
          .glass-input:focus {
            outline: none;
            border-color: rgba(0,122,255,0.6);
            box-shadow: 0 0 0 3px rgba(0,122,255,0.12);
          }
          html.dark .glass-input {
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.10);
            color: #f5f5f7;
          }
          html.dark .glass-input:focus {
            border-color: rgba(0,122,255,0.7);
            box-shadow: 0 0 0 3px rgba(0,122,255,0.20);
          }

          /* ── Glass button (primary) ── */
          .glass-btn-primary {
            background: linear-gradient(135deg, #007AFF 0%, #5856D6 100%);
            color: white;
            border: none;
            box-shadow: 0 2px 12px rgba(0,122,255,0.35);
            transition: box-shadow 0.2s, transform 0.15s, opacity 0.15s;
          }
          .glass-btn-primary:hover {
            box-shadow: 0 4px 20px rgba(0,122,255,0.50);
            transform: translateY(-1px);
          }
          .glass-btn-primary:active { transform: translateY(0); }

          /* ── Glass button (secondary) ── */
          .glass-btn-secondary {
            background: rgba(0,0,0,0.05);
            border: 1px solid rgba(0,0,0,0.08);
            transition: background 0.2s;
          }
          .glass-btn-secondary:hover { background: rgba(0,122,255,0.08); }
          html.dark .glass-btn-secondary {
            background: rgba(255,255,255,0.07);
            border: 1px solid rgba(255,255,255,0.10);
          }
          html.dark .glass-btn-secondary:hover { background: rgba(0,122,255,0.15); }

          /* ── Glass footer ── */
          .glass-footer {
            background: rgba(242,242,247,0.6);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-top: 1px solid rgba(0,0,0,0.06);
          }
          html.dark .glass-footer {
            background: rgba(0,0,0,0.5);
            border-top: 1px solid rgba(255,255,255,0.07);
          }

          /* ── PSG logo gradient text ── */
          .psg-gradient-text {
            background: linear-gradient(135deg, #007AFF 0%, #5856D6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          /* ── Section label ── */
          .section-icon {
            background: linear-gradient(135deg, rgba(0,122,255,0.12) 0%, rgba(88,86,214,0.12) 100%);
            color: #007AFF;
          }
          html.dark .section-icon {
            background: linear-gradient(135deg, rgba(0,122,255,0.20) 0%, rgba(88,86,214,0.20) 100%);
            color: #3D9FFF;
          }

          [x-cloak] { display: none !important; }
        </style>
        <script>
          function appData() {
            return {
              darkMode: localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches),
              toggleDarkMode() {
                this.darkMode = !this.darkMode;
                localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
                if (this.darkMode) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              },
              init() {
                if (this.darkMode) {
                  document.documentElement.classList.add('dark');
                }
              }
            }
          }

          function updateChecker(currentVersion, apiUrl) {
            return {
              currentVersion: currentVersion,
              latestVersion: '',
              showUpdateToast: false,
              i18n: {
                newVersionAvailable: getUpdateI18n('newVersionAvailable'),
                currentVersion: getUpdateI18n('currentVersion'),
                viewRelease: getUpdateI18n('viewRelease'),
                later: getUpdateI18n('later')
              },
              init() {
                setTimeout(() => this.checkForUpdates(), 3000);
              },
              async checkForUpdates() {
                try {
                  const dismissedVersion = localStorage.getItem('psg_dismissed_version');
                  const lastCheck = localStorage.getItem('psg_last_version_check');
                  const now = Date.now();
                  if (lastCheck && (now - parseInt(lastCheck)) < 3600000) {
                    const cachedVersion = localStorage.getItem('psg_latest_version');
                    if (cachedVersion && cachedVersion !== dismissedVersion && this.compareVersions(cachedVersion, this.currentVersion) > 0) {
                      this.latestVersion = cachedVersion;
                      this.showUpdateToast = true;
                    }
                    return;
                  }
                  const response = await fetch(apiUrl, { headers: { 'Accept': 'application/vnd.github.v3+json' } });
                  if (!response.ok) return;
                  const data = await response.json();
                  const latestVersion = (data.tag_name || '').replace(/^v/, '');
                  localStorage.setItem('psg_latest_version', latestVersion);
                  localStorage.setItem('psg_last_version_check', now.toString());
                  if (latestVersion && latestVersion !== dismissedVersion && this.compareVersions(latestVersion, this.currentVersion) > 0) {
                    this.latestVersion = latestVersion;
                    this.showUpdateToast = true;
                  }
                } catch (error) {
                  console.debug('Version check failed:', error.message);
                }
              },
              compareVersions(v1, v2) {
                const parts1 = v1.split('.').map(Number);
                const parts2 = v2.split('.').map(Number);
                for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
                  const p1 = parts1[i] || 0;
                  const p2 = parts2[i] || 0;
                  if (p1 > p2) return 1;
                  if (p1 < p2) return -1;
                }
                return 0;
              },
              dismissUpdate() {
                this.showUpdateToast = false;
                localStorage.setItem('psg_dismissed_version', this.latestVersion);
              }
            }
          }

          function getUpdateI18n(key) {
            const lang = navigator.language || 'en-US';
            const translations = {
              'zh-CN': { newVersionAvailable: '发现新版本', currentVersion: '当前版本', viewRelease: '查看更新', later: '稍后' },
              'zh-TW': { newVersionAvailable: '發現新版本', currentVersion: '當前版本', viewRelease: '查看更新', later: '稍後' },
              'en-US': { newVersionAvailable: 'New Version Available', currentVersion: 'Current', viewRelease: 'View Release', later: 'Later' },
              'fa':    { newVersionAvailable: 'نسخه جدید موجود است', currentVersion: 'نسخه فعلی', viewRelease: 'مشاهده نسخه', later: 'بعداً' },
              'ru':    { newVersionAvailable: 'Доступна новая версия', currentVersion: 'Текущая', viewRelease: 'Посмотреть', later: 'Позже' }
            };
            const langKey = Object.keys(translations).find(k => lang.startsWith(k.split('-')[0])) || 'en-US';
            return translations[langKey][key] || translations['en-US'][key];
          }
        </script>
      </head>
      <body class="text-gray-900 dark:text-gray-100 transition-colors duration-300">
        ${children}
      </body>
    </html>
  `
}
