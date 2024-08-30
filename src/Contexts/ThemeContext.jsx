import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    // Locad Theme Form Local Storage When App is Loaded
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme)
        }
    }, [])
    
    // Save Theme Whenever Theme State Will Change 
    useEffect(() => {
        localStorage.setItem('theme',theme)
    },[theme])

    
    const toggleTheme = () => {
        setTheme(prevState => (prevState === 'light' ? 'dark': 'light'));
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme]);

    const themeInfo = { theme,toggleTheme };

    return <ThemeContext.Provider value={themeInfo}>
        {children}
    </ThemeContext.Provider>
}
export default ThemeProvider;