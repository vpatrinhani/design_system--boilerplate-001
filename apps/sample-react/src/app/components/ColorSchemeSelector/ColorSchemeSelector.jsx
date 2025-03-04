import { useEffect, useState } from 'react';

import './styles.scss';

const updateQueryString = (param, value) => {
  console.log('[updateQueryString] (key, value):', param, value);
  var queryString = window.location.search.replace("?", "");
  var parameterListRaw = queryString == "" ? [] : queryString.split("&");
  var parameterList = {};
  for (var i = 0; i < parameterListRaw.length; i++) {
      var parameter = parameterListRaw[i].split("=");
      if (typeof val != 'undefined') {
          parameterList[parameter[0]] = parameter[1];
      } else if (param != parameter[0]) {
          parameterList[parameter[0]] = parameter[1];
      }
  }
  if (typeof value != 'undefined') {
      parameterList[param] = value;
  }

  var newQueryString = Object.keys(parameterList).length > 0 ? "?" : "";
  for (var item in parameterList) {
      if (Object.prototype.hasOwnProperty.call(parameterList, item)) {
          newQueryString += item + "=" + parameterList[item] + "&";
      }
  }
  newQueryString = newQueryString.replace(/&$/, "");

  // console.log('[updateQueryString] newQueryString:', newQueryString);
  window.location.replace(window.location.origin + window.location.pathname + newQueryString);
};

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) {
      return pair[1];
    }
  }

  return false;
}

function getTheme() {

  var themeValue = getQueryVariable('color-scheme') || document.querySelector('body').dataset.mylibTheme_colorScheme;

  return themeValue || 'light';
}

function setTheme(themeName) {
  document.querySelector('body').dataset.mylibTheme_colorScheme = themeName || 'light';
  document.querySelector('body').className = `mylib-theme--scheme--${themeName}`;

  updateQueryString('color-scheme', themeName);
}

const ColorSchemeSelector = ({className = ''}) => {
  // false = dark mode because of the way I wrote the CSS
  const [active, setActive] = useState(true)
  // the opposite, for screenreaders
  const [ariaActive, setAriaActive] = useState(true)
  let theme = getTheme();

  const changeThemeAndToggle = () => {
    if (getTheme() === 'dark') {
      setTheme('light')
      setActive(true)
      setAriaActive(false)
    } else {
      setTheme('dark')
      setActive(false)
      setAriaActive(true)
    }
  }

  const handleOnCChange = () => {
    changeThemeAndToggle()
  }

  const handleKeypress = e => {
    if (e.code === "Enter") {
      changeThemeAndToggle()
    }
  }

  useEffect(() => {
    if (getTheme() === 'dark') {
      setActive(false)
      setAriaActive(true)
    } else if (getTheme() === 'light') {
      setActive(true)
      setAriaActive(false)
    }
  }, [theme])

  return (
  <div className={`toggle ${className}`}>
    <input className="toggle-input" type="checkbox" id="toggle" aria-label="dark mode toggle" aria-checked={ariaActive} onKeyPress={handleKeypress} onChange={handleOnCChange} checked={!active}/>
    <div className="toggle-bg"></div>
    <div className="toggle-switch">
      <div className="toggle-switch-figure"></div>
      <div className="toggle-switch-figureAlt"></div>
    </div>
  </div>
  );
}

export default ColorSchemeSelector;
