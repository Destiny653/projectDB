"use client";

import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
  const [validMail, setValidMail] = useState(false)
    const [verification, setVerification] = useState(true)
    const [resetPassword, setResetPassword] = useState(false)  


    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    useEffect(() => {
        let localTheme = typeof window !== 'undefined' && window.localStorage.getItem('theme')
        const storedTheme = localTheme;
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, validMail, verification, resetPassword, setResetPassword, setVerification, setValidMail, toggleTheme }}>
            <div className={`theme-switcher ${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}