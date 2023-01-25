import { FC, useEffect, useState } from 'react'
import { Toast } from "flowbite-react"
import { HiCheck, HiExclamation, HiX } from "react-icons/hi"

interface Props {
  show: boolean;
  duration?: number;
  type: 'success' | 'warn'
  message: string
}

const styles = 'absolute top-20 right-5'

export const ToastComponent: FC<Props> = ({ show, duration = 2000, type, message }) => {

  const [visible, setvisible] = useState(show)

  useEffect(() => {
    if (visible) {
      setInterval(() => {
        setvisible(!visible)
      }, duration)
    }
  }, [])


  return (
    <>
      {

        visible &&
        <Toast className={styles}
          duration={1000}
        >
          {
            (type === 'success') ? (
              <>

                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                  <HiCheck className="h-5 w-5" />
                </div>
                <div className="ml-3 text-sm font-normal">
                  { message }
                </div>
                <Toast.Toggle />

              </>
            )

              : (
                <>
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
                    <HiExclamation className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal">
                    { message }
                  </div>
                  <Toast.Toggle />
                </>
              )
          }
        </Toast>

      }

    </>
  )
}
