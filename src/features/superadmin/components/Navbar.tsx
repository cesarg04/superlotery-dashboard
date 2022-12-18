import { Avatar, DarkThemeToggle, Dropdown, Navbar, useTheme, useThemeMode } from "flowbite-react"
import { FC, useState } from "react"
import { HiMenu } from "react-icons/hi"
import { useNavigate } from "react-router-dom"


interface Props{
    toggle: (event:boolean) => boolean
}

export const NavbarComponent:FC<Props> = ({toggle}) => {

    const [toggleNavbar, settoggleNavbar] = useState<boolean>(false);

    const navigate = useNavigate()

    const theme = useTheme().theme.button;

    const [mode, setmode, toggleMode] = useThemeMode(true)

    const setMode = () => {
        console.log(toggleMode);
        toggleMode()

    }

    const onToggle = () => {
        settoggleNavbar( !toggleNavbar )
        toggle(toggleNavbar)
    }


    return (
        <nav className="flex justify-between h-14 px-6 content-center">
            <Navbar.Brand onClick={() => navigate('/superadmin')} className='cursor-pointer'>
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap font-semibold dark:text-white font-title text-xl text-blue-700">
                    SuperLotery
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2 items-center gap-3">
                <div className="px-2 py-2 bg-gray-300 rounded cursor-pointer md:hidden"
                        onClick={onToggle}>
                    <HiMenu className=""/>
                </div>

                <DarkThemeToggle onClick={setMode}/>

                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                
            </div>
        </nav>
    )
}
