import { DarkThemeToggle, useTheme, useThemeMode } from "flowbite-react"


export const ChangeColorPage = () => {

    const [mode, setmode, toggleMode] = useThemeMode(true)

    
    console.log()

    return (
        <div>
            <DarkThemeToggle
                onClick={ () => toggleMode() }
            />


        </div>
    )
}
