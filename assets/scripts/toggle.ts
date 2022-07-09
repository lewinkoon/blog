import ThemeColorScheme from "js/theme"

const colorSchemeKey = 'ThemeColorScheme';
const colorSchemeItem = localStorage.getItem(colorSchemeKey);

if (colorSchemeItem == 'dark') {
    document.documentElement.dataset.color = 'dark';
} else if (colorSchemeItem == 'light') {
    document.documentElement.dataset.color = 'light';
} else {
    localStorage.setItem(colorSchemeKey, "dark");
    document.documentElement.dataset.color = 'dark';
}

const init = () => {
    new ThemeColorScheme(document.getElementById('dark-mode'))
}

window.addEventListener('load', () => {
    setTimeout(function () {
        init()
    }, 0)
})