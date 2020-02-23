import * as React from 'react';
import {useContext, useState} from 'react';

const themes = [
  {
    name: 'light',
    foreground: "#000000",
    background: "#eeeeee"
  },
  {
    name: 'dark',
    foreground: "#ffffff",
    background: "#222222"
  }
];

const ThemeContext = React.createContext(themes.light);

export default function UseContextDemo() {
  const [themeValue, setThemeValue] = useState(0);

  return (
      <ThemeContext.Provider value={themes[themeValue]}>
        <Toolbar toggleTheme={() => setThemeValue((themeValue + 1) % themes.length)}/>
      </ThemeContext.Provider>
  );
}

function Toolbar({toggleTheme}) {
  return (
      <div className="w-full text-center">
        <ThemedButton toggleTheme={toggleTheme}/>
      </div>
  );
}

function ThemedButton({toggleTheme}) {
  const theme = useContext(ThemeContext);

  return (
      <button className="p-8"
              style={{background: theme.background, color: theme.foreground}}
              onClick={toggleTheme}>
        I am styled by theme context! Click me to toggle.
      </button>
  );
}
