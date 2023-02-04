import { Button, Label, Modal, Select, Spinner, TextInput } from 'flowbite-react';
import { FC } from 'react';
import { useAuthContext } from '../../../../hooks/useContext';
import { baseApI } from '../../../../api/apiSettings';
import { useEditZonas } from '../../hooks/useEditZonas';
import { Toaster } from 'react-hot-toast';
import { BsCheckLg } from 'react-icons/bs';


interface Props {
  visible:      boolean
  onClose:      (event: boolean) => any
  id:           number
  nombre:       string
  pais:         string
  provincia:    string
  limites:      string
  sucursal?:    string
  sucursal_id:  string;
  tipo_moneda?: string

}

export const ActualizarZona: FC<Props> = (props) => {

  const { getAllSucursales, register, handleSubmit, onSubmit, editZonasMutation } = useEditZonas(props.id, props.sucursal_id)

  const onClick = () => {
    props.onClose(!props.visible)
  }

  const onChange = () => {

  }

  return (
    <>

      <Modal
        show={props.visible}
        size="lg"
        onClose={onClick}>
        <Modal.Header>
          Actualizar zona
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)} >
          <Modal.Body className="">

            <div className="space-y-6">
              <div className="w-full flex justify-between gap-4">

                <TextInput
                  placeholder="Nombre"
                  required
                  className="w-3/6"
                  {...register('nombre')}
                  defaultValue={props.nombre}
                />

                <TextInput
                  placeholder="Pais"
                  required
                  className="w-3/6"
                  {...register('pais')}
                  defaultValue={props.pais} />

              </div>

              <div className="flex justify-between gap-4">
                <TextInput
                  placeholder="Provincia"
                  required
                  className="w-3/6"
                  {...register('provincia')}
                  defaultValue={props.provincia} />

                <TextInput
                  placeholder="Limite"
                  type={'number'}
                  required
                  className="w-3/6"
                  {...register('limites')}
                  defaultValue={props.limites || ''} />

              </div>

              <div className="flex justify-between gap-4">

                <div
                  className="w-3/6"
                  id="select">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="peso"
                      value="Seleccione el tipo de moneda"
                    />
                  </div>
                  <Select
                    {...register('tipo_moneda')}
                    id="peso"
                    required={true}
                    defaultValue={props.tipo_moneda}
                  >
                    <option>
                      USD
                    </option>
                    <option>
                      DOP
                    </option>
                    <option>
                      HTG
                    </option>
                  </Select>
                </div>
                <div id="select" className="w-3/6">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="sucursal"
                      value="Seleccione la sucursal"
                    />
                  </div>
                  <Select
                    id="sucursal"
                    required={true}
                    defaultValue={props.sucursal}
                    {...register('sucursal_id')}

                  >
                    {
                      getAllSucursales.data?.map((suc) => (
                        <option
                          value={suc.id}
                          key={suc.id} >
                          {suc.nombre}
                        </option>

                      ))
                    }
                  </Select>
                </div>
              </div>

            </div>


          </Modal.Body>
          <Modal.Footer className="justify-center">
            <Button
              type='submit'
              className='w-3/6 font-bold text-3xl'
              disabled={editZonasMutation.isLoading}>
              {
                editZonasMutation.isLoading && <div className="mr-3">
                  <Spinner
                    size="sm"
                    light={true}
                  />
                </div>
              }
              Guardar Cambios
            </Button>
          </Modal.Footer>

        </form>

      </Modal>
      <Toaster />
    </>
  )
}
