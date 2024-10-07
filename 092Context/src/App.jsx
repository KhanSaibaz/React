import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme' // Importing the ThemeProvider to provide theme context
import ThemeBtn from './components/ThemeBtn' // Button component to toggle theme
import Card from './components/Card' // Card component that will use the theme

function App() {
  // State to manage the current theme, 'light' by default
  const [themeMode, setThemeMode] = useState('light')

  // Function to set the theme to 'light'
  const lightTheme = () => {
    setThemeMode('light')
  }

  // Function to set the theme to 'dark'
  const darkTheme = () => {
    setThemeMode('dark')
  }

  // This useEffect runs every time the themeMode changes
  // It removes any previous theme class ('light' or 'dark') from the <html> tag
  // and adds the current theme class to it
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    // Wrapping the app with ThemeProvider to pass down the themeMode and theme-changing functions
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          {/* Container for theme toggle button */}
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn /> {/* Theme button to switch between light and dark */}
          </div>

          {/* Container for the card */}
          <div className="w-full max-w-sm mx-auto">
            <Card /> {/* Card component that will display content based on the theme */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
