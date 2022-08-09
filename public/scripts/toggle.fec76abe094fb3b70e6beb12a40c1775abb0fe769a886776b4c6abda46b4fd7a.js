(() => {
  // ns-hugo:C:\Users\Lewin\Documents\github\hugo-site\assets\js\theme.ts
  var ThemeColorScheme = class {
    localStorageKey = "ThemeColorScheme";
    currentScheme;
    constructor(toggleEl) {
      this.currentScheme = this.getSavedScheme();
      if (toggleEl)
        this.bindClick(toggleEl);
    }
    saveScheme() {
      localStorage.setItem(this.localStorageKey, this.currentScheme);
    }
    bindClick(toggleEl) {
      toggleEl.addEventListener("click", (e) => {
        if (this.isDark()) {
          this.currentScheme = "light";
        } else {
          this.currentScheme = "dark";
        }
        this.setBodyClass();
        this.saveScheme();
      });
    }
    isDark() {
      return this.currentScheme == "dark";
    }
    setBodyClass() {
      if (this.isDark()) {
        document.documentElement.dataset.color = "dark";
      } else {
        document.documentElement.dataset.color = "light";
      }
    }
    getSavedScheme() {
      const savedScheme = localStorage.getItem(this.localStorageKey);
      if (savedScheme == "light" || savedScheme == "dark")
        return savedScheme;
      else
        return "dark";
    }
  };
  var theme_default = ThemeColorScheme;

  // <stdin>
  var colorSchemeKey = "ThemeColorScheme";
  var colorSchemeItem = localStorage.getItem(colorSchemeKey);
  if (colorSchemeItem == "dark") {
    document.documentElement.dataset.color = "dark";
  } else if (colorSchemeItem == "light") {
    document.documentElement.dataset.color = "light";
  } else {
    localStorage.setItem(colorSchemeKey, "dark");
    document.documentElement.dataset.color = "dark";
  }
  var init = () => {
    new theme_default(document.getElementById("dark-mode"));
  };
  window.addEventListener("load", () => {
    setTimeout(function() {
      init();
    }, 0);
  });
})();
