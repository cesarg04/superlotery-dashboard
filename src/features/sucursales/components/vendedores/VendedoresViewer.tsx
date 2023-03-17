import { Button, Select, Table, TextInput } from "flowbite-react"
import { useTranslation } from "react-i18next"
import { BiSearch } from "react-icons/bi"
import { FaRoute } from "react-icons/fa"
import { useZonas } from "../../../superadmin/hooks/useZonas"
import { useAuthContext } from "../../../../hooks/useContext"
import { getNameZonaById } from "../../../../helpers/parseZonas"

export const VendedoresViewer = () => {

  const { stateAuth } = useAuthContext()
  const { zonasForSucID } = useZonas(stateAuth.token!, stateAuth.user?.id)

  const { t } = useTranslation('global')



  return (
    <div className="border px-5 py-5 rounded-md">
      <h1>{t('vendedor.sellers.seller_list')}</h1>
      <div className="w-full flex gap-2 mt-5" >
        <Select
          // helperText="Todas las zonas"
          size={1}
          icon={FaRoute}
          className="w-40"
        >
          {
            zonasForSucID.data?.map(zona => (
              <option
                key={zona.id}
                value={zona.id}
              >
                {getNameZonaById(zona.id, zonasForSucID.data)}
              </option>
            ))
          }
        </Select>
        <Button color={'success'} >
          <BiSearch className="text-xl" />
        </Button>
      </div>

      <div className="w-full mt-10" >
        <Table striped={true}>
          <Table.Head>
            <Table.HeadCell>
              ID
            </Table.HeadCell>
            <Table.HeadCell>
              Nombre
            </Table.HeadCell>
            <Table.HeadCell>
              Usuario
            </Table.HeadCell>
            <Table.HeadCell>
              correo
            </Table.HeadCell>
            <Table.HeadCell>
              zona
            </Table.HeadCell>
            <Table.HeadCell>
              {/* <TextInput
                            type={'text'}
                            placeholder='Buscar'
                            value={find}
                            onChange={({ target }) => onChangeFind(target.value)} /> */}
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {/* {
                        vendedoresQuery.data && vendedoresQuery.data?.filter((e) => e.nombre.toLocaleLowerCase().includes(find)).map(vend => (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={vend.id}>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {vend?.id}
                                </Table.Cell>
                                <Table.Cell>
                                    {vend?.nombre}
                                </Table.Cell>
                                <Table.Cell>
                                    {vend.usuario}
                                </Table.Cell>
                                <Table.Cell>
                                    {vend.email}
                                </Table.Cell>
                                <Table.Cell>
                                    { getNameZonaById( vend.zona_id, zonasQuery.data || [] ) }
                                </Table.Cell>
                                <Table.Cell className="flex gap-3" >
                                    <DropdownOptionsVend vendendor={ vend } />
                                </Table.Cell>
                            </Table.Row>
                        ))
                    } */}
          </Table.Body>
        </Table>

      </div>


    </div>
  )
}
