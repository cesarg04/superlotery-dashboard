import { useSucursales } from '../../../../src/features/superadmin/hooks/useSucursales'
import { useAuthContext } from '../../../../src/hooks/useContext'
import { renderHook } from '@testing-library/react'

describe('test a las sucursales', () => {

    test('debe mostrar los datos obtenidos de la api', () => {

        const { stateAuth } = useAuthContext()
        console.log(stateAuth.token);
        // const { result } = renderHook( () => useSucursales( stateAuth.token || '' ) )

        console.log(result.current)

    })

})