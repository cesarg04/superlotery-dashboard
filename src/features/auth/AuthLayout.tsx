import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
    return (
        <div className="w-full h-screen flex justify-center content-center items-center">
            <Outlet />
        </div>
    )
}
