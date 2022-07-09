type colorScheme = 'light' | 'dark';

class ThemeColorScheme {
    private localStorageKey = 'ThemeColorScheme';
    private currentScheme: colorScheme;

    constructor(toggleEl: HTMLElement) {
        this.currentScheme = this.getSavedScheme();

        if (toggleEl)
            this.bindClick(toggleEl);
    }

    private saveScheme() {
        localStorage.setItem(this.localStorageKey, this.currentScheme);
    }

    private bindClick(toggleEl: HTMLElement) {
        toggleEl.addEventListener('click', (e) => {
            if (this.isDark()) {
                /// Disable dark mode
                this.currentScheme = 'light';
            }
            else {
                this.currentScheme = 'dark';
            }

            this.setBodyClass();
            this.saveScheme();
        })
    }

    private isDark() {
        return (this.currentScheme == 'dark');
    }

    private setBodyClass() {
        if (this.isDark()) {
            document.documentElement.dataset.color = 'dark';
        }
        else {
            document.documentElement.dataset.color = 'light';
        }
    }

    private getSavedScheme(): colorScheme {
        const savedScheme = localStorage.getItem(this.localStorageKey);

        if (savedScheme == 'light' || savedScheme == 'dark') return savedScheme;
        else return 'dark';
    }
}

export default ThemeColorScheme;