import { Sidebar } from "flowbite-react"
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi'
import { Link } from "react-router-dom"


export const SidebarComponent = () => {
    return (
        <div className="w-fit">
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Link to={'/superadmin/zonas'}>
                        <Sidebar.Item
                            icon={HiChartPie}
                        >
                            Zonas
                        </Sidebar.Item>
                        </Link>
                        
                        <Sidebar.Collapse
                            icon={HiShoppingBag}
                            label="Loterias"
                        >
                            <Link to={'/superadmin/loterias'} >
                            <Sidebar.Item>
                                Lista de Loterias
                            </Sidebar.Item>
                            </Link>
                            <Link to={'/superadmin/publicar-sorteos'} >
                            <Sidebar.Item>
                                Publicar Sorteos
                            </Sidebar.Item>
                            
                            </Link>
                            <Link to={'/superadmin/combinaciones'} >
                            <Sidebar.Item>
                                Combinaciones
                            </Sidebar.Item>
                            
                            </Link>
                        </Sidebar.Collapse>

                        <Link to={'/superadmin/sucursales'}>
                        
                        <Sidebar.Item
                            icon={HiInbox}
                        >
                            Sucursales
                        </Sidebar.Item>
                        </Link>

                        <Link to={'/superadmin/vendedores'} >
                        <Sidebar.Item
                            href="#"
                            icon={HiUser}
                        >
                            Vendedores
                        </Sidebar.Item>
                        
                        
                        </Link>
                        <Sidebar.Item
                            href="#"
                            icon={HiShoppingBag}
                        >
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiArrowSmRight}
                        >
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiTable}
                        >
                            Sign Up
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}
