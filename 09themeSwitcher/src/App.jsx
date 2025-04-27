import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'
import { ThemeProvider } from './Contexts/Theme'
import ThemeBtn from './Components/ThemeButton'
import Card from './Components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  // actual change in the theme 
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark'); // Remove both classes
    document.querySelector('html').classList.add(themeMode); // Add the current theme (light or dark)
  }, [themeMode]);
  
  


  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  {/* Theme btn*/ }
                  <ThemeBtn/>

          </div>
      
          <div className="w-full max-w-sm mx-auto">
                  {/* card */ }
                  <Card/>
          </div>
        </div>
    </div>
    
    </ThemeProvider>
  )
}

export default App
