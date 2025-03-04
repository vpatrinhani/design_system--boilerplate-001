function setMylibThemeColorScheme(querySelector, colorScheme) {
  const themeColorScheme = 'mylib-theme--scheme--' + colorScheme

  document.querySelector(querySelector).classList.add(themeColorScheme);
  document.querySelector(querySelector).dataset.mylibTheme_colorScheme = colorScheme;
}

(function () {
  function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');
      if (pair[0] == variable) {
        return pair[1];
      }
    }

    return false;
  }

  // detect the OS's preferred color scheme
  const defaultColorScheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';

  const colorScheme = getQueryVariable('color-scheme') || defaultColorScheme;

  setMylibThemeColorScheme('body', colorScheme);
})();
