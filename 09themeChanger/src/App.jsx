import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './context/Theme'
import ThemeBtn from './component/ThemeBtn';
import Card from './component/Card';

function App() {
  const [themeMode, setThemeMode ]= useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  }

  const lightTheme = () => {
    setThemeMode("light");
  }

  useEffect(() => {
    const target = document.querySelector('html').classList;
    target.remove("light","dark");
    target.add(themeMode);
  }, [themeMode]);

  return ( 
    <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/*themeBtn */}
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* Card */}
              <Card/>
            </div>
        </div>
      </div>
    </ThemeContextProvider>    
      
  )
}

export default App
