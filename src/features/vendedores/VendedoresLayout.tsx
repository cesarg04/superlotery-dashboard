import { Button } from "flowbite-react"
import { useTranslation } from "react-i18next"

export const VendedoresLayout = () => {


  const [t, i18n] = useTranslation("global")

  
  const changeL = () => {
  
    i18n.changeLanguage('en')
  }


  return (
    <div>
      <span>{ t('test.hello') }</span>
      <Button onClick={ () => changeL() } >
        Cambiar
      </Button>
    </div>

  )
}
