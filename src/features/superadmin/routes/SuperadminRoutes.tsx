import { Home, Sucursales, Zonas } from "../pages"


export default {
    children: [
        {
            index: true,    
            element: <Home/>
        },
        {
            path: 'sucursales',
            element: <Sucursales/>
        },
        {
            path: 'zonas',
            element: <Zonas/>
        }
    ]
}