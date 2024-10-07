import React, { createContext, useContext } from 'react';

// Create the ThemeContext with default values for themeMode and functions
export const ThemeContext = React.createContext({
    themeMode: 'light', // Default theme is 'light'
    darkTheme: () => {}, // Placeholder function for setting dark theme
    lightTheme: () => {}, // Placeholder function for setting light theme
});

// Export the ThemeProvider to wrap components that need access to the theme
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to easily access the ThemeContext in any component
export default function useTheme() {
    return useContext(ThemeContext); // Returns the current theme context (themeMode, darkTheme, lightTheme)
}
