/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { APP_FULL_NAME, GITHUB_REPO, APP_VERSION } from '../constants.js';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer class="glass-footer mt-12 py-6">
            <div class="container mx-auto px-5">
                <div class="flex flex-col md:flex-row items-center justify-between gap-3">
                    <div class="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
                        <span class="text-xs text-gray-500 dark:text-gray-400">
                            © {currentYear} {APP_FULL_NAME}
                        </span>
                        <span class="hidden md:inline text-gray-200 dark:text-gray-800">|</span>
                        <a
                            href={`${GITHUB_REPO}/releases/tag/v${APP_VERSION}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-[11px] px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/8 text-gray-500 dark:text-gray-400 border border-black/6 dark:border-white/10 hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-mono"
                        >
                            v{APP_VERSION}
                        </a>
                    </div>

                    <a
                        href={GITHUB_REPO}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                        aria-label="GitHub"
                    >
                        <i class="fab fa-github text-lg"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};
