/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { APP_NAME, GITHUB_REPO } from '../constants.js';

const PsgLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="url(#nav-grad)"/>
        <path d="M5 21 Q16 7 27 21" stroke="white" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <circle cx="9"  cy="23" r="2.2" fill="white" fill-opacity="0.75"/>
        <circle cx="16" cy="25" r="2.5" fill="white"/>
        <circle cx="23" cy="23" r="2.2" fill="white" fill-opacity="0.75"/>
        <line x1="11.1" y1="23.6" x2="13.6" y2="24.6" stroke="white" stroke-width="1.4" stroke-linecap="round" opacity="0.5"/>
        <line x1="18.4" y1="24.6" x2="20.9" y2="23.6" stroke="white" stroke-width="1.4" stroke-linecap="round" opacity="0.5"/>
        <defs>
            <linearGradient id="nav-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stop-color="#007AFF"/>
                <stop offset="1" stop-color="#5856D6"/>
            </linearGradient>
        </defs>
    </svg>
);

export const Navbar = () => {
    return (
        <nav class="glass-nav fixed top-0 w-full z-50 transition-all duration-300">
            <div class="container mx-auto px-5">
                <div class="flex items-center justify-between h-14">
                    <a href="#" class="flex items-center gap-2.5 group">
                        <PsgLogo />
                        <div class="flex flex-col leading-none">
                            <span class="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors tracking-tight">
                                {APP_NAME}
                            </span>
                            <span class="text-[10px] text-gray-400 dark:text-gray-500 tracking-wider uppercase font-medium">
                                PSG
                            </span>
                        </div>
                    </a>

                    <div class="flex items-center gap-1">
                        <a
                            href={GITHUB_REPO}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="px-3 py-1.5 text-gray-600 dark:text-gray-300 rounded-full text-sm hover:bg-black/5 dark:hover:bg-white/8 transition-colors flex items-center gap-1.5 font-medium"
                        >
                            <i class="fab fa-github text-base"></i>
                            <span class="hidden sm:inline">GitHub</span>
                        </a>
                        <button
                            class="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/8 transition-colors"
                            x-on:click="toggleDarkMode()"
                            aria-label="Toggle dark mode"
                        >
                            <i class="fas text-sm" x-bind:class="darkMode ? 'fa-sun' : 'fa-moon'"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
