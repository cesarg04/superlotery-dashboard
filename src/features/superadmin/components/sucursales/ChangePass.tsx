import { useState, FC } from "react"
import { Button, Spinner, TextInput } from "flowbite-react"
import { useForm } from "react-hook-form"
import { useAddEditSucursal } from "../../hooks/useAddEditSucursal"

interface Props {
    id: number
}

interface ChangePasswordType {
    id: number;
    password: string;
}

export const ChangePass: FC<Props> = ({ id }) => {

    const { onSubmitPassword, changePassordMutation } = useAddEditSucursal()

    const { register, handleSubmit, setError, formState: { errors } } = useForm<ChangePasswordType>()

    return (
        <form>
            <TextInput
                placeholder="Contraseña"
                className="my-3"
                type={'password'}
                {...register('password', { minLength: 8 })}
                color={!!errors.password ? 'failure' : 'primary'}
            />

            <Button
                type='submit'
                className='w-3/6 font-bold text-3xl'
                disabled={changePassordMutation.isLoading} >

                {
                    changePassordMutation.isLoading && <div className="mr-3">
                        <Spinner
                            size="sm"
                            light={true}
                        />
                    </div>
                }

                Editar
            </Button>
        </form>
    )
}
