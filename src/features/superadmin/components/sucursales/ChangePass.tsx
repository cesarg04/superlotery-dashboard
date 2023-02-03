import { useState, FC } from "react"
import { Button, Checkbox, Label, Modal, Spinner, TextInput } from "flowbite-react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query";
import { baseApI } from "../../../../api/apiSettings";
import { useAuthContext } from "../../../../hooks/useContext";
import { toast } from "react-hot-toast";

interface Props {
    visible: boolean;
    onClose: (val: boolean) => void;
    id: number
}

interface ChangePasswordType {
    id: number;
    password: string;
    re_password: string
}

export const ChangePass: FC<Props> = ({ visible, onClose, id }) => {
    const { stateAuth } = useAuthContext()
    const { baseURL } = baseApI(stateAuth.token)
    const { register, handleSubmit, setError, formState: { errors } } = useForm<ChangePasswordType>()

    const changepwMutation = useMutation({
        mutationFn: (pass: ChangePasswordType) => {
            return baseURL.put('users/update/password', pass)
        },
        onSuccess: () => {
            toast.success('Contraseña modificada correctamente', {
                duration: 4000,
                position: 'top-left'
            })
        },
        onError: (data, vairables) => {
            console.log(vairables)
            toast.error('Error al modidicar la contraseña, intente de nuevo', {
                duration: 4000,
                position: 'top-right'
            })
        }
    })

    const onSubmit: SubmitHandler<ChangePasswordType> = (data) => {

        if(data.password != data.re_password){
            return setError('password',
                {
                    type: 'setValueAs',
                    message: 'Las creedenciales no coinciden'
                })
        }

        changepwMutation.mutate({
            ...data,
            id
        })
    }

    const onClick = () => {
        onClose(!visible)
    }


    return (
        <>

            <Modal
                show={visible}
                size="md"
                popup={true}
                onClose={() => onClick()}
            >
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Cambiar contraseña.
                            </h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password"
                                        value="Ingrese la nueva contraseña"
                                    />
                                </div>
                                <TextInput
                                    id="password"
                                    type="password"
                                    required={true}

                                    {...register('password', { required: true, min: 8 })}
                                />
                                <Label
                                    htmlFor="re-password"
                                    value="Repita la contraseña" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    required={true}
                                    color={errors.password ? 'failure' : 'gray'}
                                    {...register('re_password', { required: true })}
                                />

                                {
                                    (errors.password) && (
                                        <div className="text-sm font-medium text-red-500 mt-1" >
                                            {errors.password?.message}
                                        </div>
                                    )
                                }
                            </div>

                            <div className="w-full flex justify-center content-center">
                                <Button
                                    type="submit" >
                                    {
                                        changepwMutation.isLoading && <div className="mr-3">
                                            <Spinner
                                                size="sm"
                                                light={true}
                                            />
                                        </div>
                                    }
                                    Cambiar contraseña
                                </Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
