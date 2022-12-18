import { useIsFetching } from "@tanstack/react-query"
import { FC, useState } from "react"
import { Outlet } from "react-router-dom"
import { IsLoadingComponent } from "../../components/isLoading"
import { NavbarComponent } from "./components/Navbar"
import { SidebarComponent } from "./components/SidebarComponent"



export const SuperadminLayout:FC = () => {
  const isFetching  = useIsFetching();
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);

  const setToggle = (event:boolean) => {
    setToggleSidebar(event)
    return event
  } 

  console.log(isFetching);
  return (  
    <div className="container mx-auto dark:bg-dark h-screen">
    <header className="pb-4 py-3 w-full">
      <NavbarComponent toggle={(event) => setToggle(event)} />
    </header>
    <div className="flex">
      <aside className={`py-2 px-1 ease-in-out duration-300 md:block ${toggleSidebar ? 'translate-x-0 block' : 'translate-x-full hidden'}`}>
        <SidebarComponent/>
        </aside>
      <main className="w-full px-10">
        {
          // isFetching > 0 && <IsLoadingComponent/>  
        }
        <Outlet/>
      </main>
      <footer>

      </footer>
    </div>
  </div>

  )
}
