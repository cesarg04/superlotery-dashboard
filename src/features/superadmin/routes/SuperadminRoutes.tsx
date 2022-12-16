import { Home, Sucursales } from "../pages"


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
    ]
}