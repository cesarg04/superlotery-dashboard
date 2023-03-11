import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { DarkThemeToggle, useTheme, useThemeMode } from "flowbite-react"

export const ChangeScreenMode = () => {


    const theme = useTheme()
    const [mode, setmode, toggleMode] = useThemeMode(true)

    const toggleFuc = () => {

        ( mode === 'dark' ) 
        ? setmode('light')
        : setmode('dark')

    }

    return (
        <div
        onClick={ toggleFuc }
            className={`w-10 h-10 cursor-pointer border-2 
        rounded-md flex justify-center items-center text-2xl
        hover:bg-slate-100
        ${mode === 'dark' ? 'text-white hover:bg-slate-400' : ''}`} >
            {
                mode ===
                'dark' ? <MdOutlineLightMode />
                : <MdOutlineDarkMode />
            }


        </div>
    )
}
