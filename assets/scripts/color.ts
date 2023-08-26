type colorScheme = 'light' | 'dark';

class ThemeColorScheme {
    private localStorageKey = 'ThemeColorScheme';
    private currentScheme: colorScheme;

    constructor(toggleEl: HTMLElement) {
        this.currentScheme = this.getSavedScheme();

        this.dispatchEvent(document.documentElement.dataset.color as colorScheme);

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

    private dispatchEvent(colorScheme: colorScheme) {
        const event = new CustomEvent('onColorSchemeChange', {
            detail: colorScheme
        });
        window.dispatchEvent(event);
    }

    private setBodyClass() {
        if (this.isDark()) {
            document.documentElement.dataset.color = 'dark';
        }
        else {
            document.documentElement.dataset.color = 'light';
        }

        this.dispatchEvent(document.documentElement.dataset.color as colorScheme);
    }

    private getSavedScheme(): colorScheme {
        const savedScheme = localStorage.getItem(this.localStorageKey);

        if (savedScheme == 'light' || savedScheme == 'dark') return savedScheme;
        else return 'dark';
    }
}

// toogle script

const colorSchemeKey = 'ThemeColorScheme'
const colorSchemeItem = localStorage.getItem(colorSchemeKey)

if (colorSchemeItem == 'dark') {
    document.documentElement.dataset.color = 'dark'
} else if (colorSchemeItem == 'light') {
    document.documentElement.dataset.color = 'light'
} else {
    localStorage.setItem(colorSchemeKey, "light")
    document.documentElement.dataset.color = 'light'
}

let chart = false
if (document.currentScript) {
    chart = document.currentScript.dataset.chart == 'true'
}

window.addEventListener('load', () => {
    setTimeout(function () {
        new ThemeColorScheme(document.getElementById('dark-mode'))
    }, 0)
})
