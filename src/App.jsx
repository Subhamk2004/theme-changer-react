import './App.css'
import theme from "./Context/Theme.jsx";
import {ThemeProvider} from "./Context/Theme.jsx";
import {useState, useEffect} from "react";
import ThemeBtn from "./Components/ThemeBtn.jsx";
import Card from "./Components/Card.jsx";

function App() {
    const [themeMode, setThemeMode] = useState('light')

    let lightThemeMode = () => {
        setThemeMode('light')
    }

    let darkThemeMode = () => {
        setThemeMode('dark')
    }

    // actual change in theme

    useEffect(() => {
        document.querySelector('html').classList.remove('light' , 'dark')
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode]);
    

    return (
        <ThemeProvider value={{themeMode, lightThemeMode, darkThemeMode}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div
                        className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
