import { Button, Pagination, Select, Table } from "flowbite-react"
import { useTranslation } from "react-i18next"
import { FaSearch } from "react-icons/fa"

export const DailySales = () => {

  const { t, i18n } = useTranslation('global');

  const onPageChange = () => {

  }

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
            {t('global.lotery.vendor')}
          </Table.HeadCell>
          <Table.HeadCell>
            {t('global.lotery.sales')}
          </Table.HeadCell>
          <Table.HeadCell>
            {t('global.lotery.commission')}
          </Table.HeadCell>
          <Table.HeadCell>
            {t('global.lotery.awards')}
          </Table.HeadCell>
          <Table.HeadCell>
            {t('global.lotery.result')}
          </Table.HeadCell>
          <Table.HeadCell>
            {t('global.lotery.commission_sup')}
          </Table.HeadCell>
          <Table.HeadCell>
            {t('global.lotery.total_result')}
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              1
            </Table.Cell>
            <Table.Cell>
              Carlos
            </Table.Cell>
            <Table.Cell>
              RD $310.00
            </Table.Cell>
            <Table.Cell>
              RD $ 18
            </Table.Cell>
            <Table.Cell>
              RD $ 20
            </Table.Cell>
            <Table.Cell>
              RD $ 20
            </Table.Cell>
            <Table.Cell>
              RD $ 20
            </Table.Cell>
            <Table.Cell className="font-bold">
              RD $ 20
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-100 dark:border-gray-700 dark:bg-gray-800 font-bold ">
            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-white">

            </Table.Cell>
            <Table.Cell>
              Totales en RD
            </Table.Cell>
            <Table.Cell>
              RD $310.00
            </Table.Cell>
            <Table.Cell>
              RD $ 18
            </Table.Cell>
            <Table.Cell>
              RD $ 20
            </Table.Cell>
            <Table.Cell>
              RD $ 20
            </Table.Cell>
            <Table.Cell>
              RD $ 20
            </Table.Cell>
            <Table.Cell className="font-bold">
              RD $ 20
            </Table.Cell>
          </Table.Row>
        </Table.Body>


      </Table>

      <div className="w-full" >
        {/* <Pagination
          currentPage={29}
          layout="navigation"
          totalPages={100}
          onPageChange={onPageChange}
        /> */}
      </div>


    </div>
  )
}
