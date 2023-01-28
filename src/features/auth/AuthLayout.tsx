import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
    return (
        <div className="w-full h-screen flex justify-center content-center items-center">
            <Outlet />
            <Toaster/>
        </div>
    )
}
