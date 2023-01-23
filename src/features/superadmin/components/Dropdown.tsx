import { Avatar, Dropdown } from "flowbite-react"
import { baseApi } from "../../../api/apiSettings"
import { useAuthContext } from "../../../hooks/useContext"
import { useNavigate } from "react-router-dom"

export const DropdownComponent = () => {

    const { signOut } = useAuthContext()

    const navigate =  useNavigate()

    const Signut = async() => {

        try {
            await baseApi.get('logout')
            signOut()
            navigate('/auth')
        } catch (error) {
            console.log(error)
        }

    }
    

    return (
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
            </Dropdown.Item>S
            <Dropdown.Item>
                Settings
            </Dropdown.Item>
            <Dropdown.Item>
                Earnings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={Signut} >
                Sign out
            </Dropdown.Item>
        </Dropdown>
    )
}
