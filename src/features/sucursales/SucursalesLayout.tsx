import { useState } from "react"
import { HeaderSucursal } from "./components/HeaderSucursal"
import { DrawerSucursal } from "./components/SidebarSucursal"
import { Outlet } from "react-router-dom";

export const SucursalesLayout = () => {

  const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);

  const setToggle = (event:boolean) => {
    setToggleSidebar(event)
    return event
  } 

  return (
    <div className="container mx-auto dark:bg-dark h-full" >
      <header className="pb-4 py-3 w-full">
        <HeaderSucursal />
      </header>

      <div className="flex">
        <aside className={`py-2 px-1 ease-in-out duration-300 md:block ${toggleSidebar ? 'translate-x-0 block' : 'translate-x-full hidden'}`}>
          <DrawerSucursal />
        </aside>
        <main className="w-full px-10">
          {
            // isFetching > 0 && <IsLoadingComponent/>  
          }
          <Outlet />

        </main>
        <footer>

        </footer>
      </div>

    </div>
  )
}
