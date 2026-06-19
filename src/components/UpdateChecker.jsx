/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { APP_VERSION, GITHUB_REPO, GITHUB_API_RELEASES } from '../constants.js';

export const UpdateChecker = () => {
    const xData = `updateChecker('${APP_VERSION}', '${GITHUB_API_RELEASES}')`;
    const releaseUrl = `${GITHUB_REPO}/releases/latest`;

    return (
        <div
            x-data={xData}
            x-show="showUpdateToast"
            x-cloak
            x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 translate-y-2"
            x-transition:enter-end="opacity-100 translate-y-0"
            x-transition:leave="transition ease-in duration-200"
            x-transition:leave-start="opacity-100 translate-y-0"
            x-transition:leave-end="opacity-0 translate-y-2"
            class="fixed bottom-6 right-6 z-50 max-w-xs"
        >
            <div class="glass-card p-4 shadow-xl">
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 w-8 h-8 rounded-full section-icon flex items-center justify-center mt-0.5">
                        <i class="fas fa-arrow-up text-xs"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2 flex-wrap">
                            <span x-text="i18n.newVersionAvailable"></span>
                            <span class="text-xs px-1.5 py-0.5 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 font-mono" x-text="'v' + latestVersion"></span>
                        </p>
                        <div class="mt-2 flex items-center gap-3">
                            <a
                                href={releaseUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-xs font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                            >
                                <span x-text="i18n.viewRelease"></span> →
                            </a>
                            <button
                                x-on:click="dismissUpdate()"
                                class="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                            >
                                <span x-text="i18n.later"></span>
                            </button>
                        </div>
                    </div>
                    <button
                        x-on:click="dismissUpdate()"
                        class="flex-shrink-0 text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
                        aria-label="Close"
                    >
                        <i class="fas fa-times text-xs"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
