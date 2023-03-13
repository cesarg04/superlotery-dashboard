import { Button, Select, Table } from "flowbite-react"
import { useTranslation } from "react-i18next"
import { FaSearch } from "react-icons/fa"

export const DailySales = () => {

  const { t, i18n } = useTranslation('global');

  return (
    <div className="border rounded-md h-96 mt-10 px-5 pt-5">

      <h1 className="text-2xl font-bold" >{t('global.lotery.sales_day')}</h1>

      <div className="w-full flex gap-3 h-20 mt-10" >

        <Select className="w-3/12	font-semibold text-2xl" size={1}>
          <option className="font-semibold" >zona 1</option>
          <option>zona 1</option>
        </Select>

        <Button color={'success'} className="" size={'lg'} >
          <FaSearch />
        </Button>
      </div>

      <Table>
        <Table.Head>
          <Table.HeadCell>
            #
          </Table.HeadCell>
          <Table.HeadCell>
              { t('global.lotery.vendor') }
          </Table.HeadCell>
          <Table.HeadCell>
          { t('global.lotery.sales') }
          </Table.HeadCell>
          <Table.HeadCell>
          { t('global.lotery.commission') }
          </Table.HeadCell>
          <Table.HeadCell>
          { t('global.lotery.awards') }
          </Table.HeadCell>
          <Table.HeadCell>
          { t('global.lotery.result') }
          </Table.HeadCell>
          <Table.HeadCell>
          { t('global.lotery.commission_sup') }
          </Table.HeadCell>
          <Table.HeadCell>
          { t('global.lotery.total_result') }
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>
              Sliver
            </Table.Cell>
            <Table.Cell>
              Laptop
            </Table.Cell>
            <Table.Cell>
              $2999
            </Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>
              White
            </Table.Cell>
            <Table.Cell>
              Laptop PC
            </Table.Cell>
            <Table.Cell>
              $1999
            </Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>
              Black
            </Table.Cell>
            <Table.Cell>
              Accessories
            </Table.Cell>
            <Table.Cell>
              $99
            </Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>


    </div>
  )
}
