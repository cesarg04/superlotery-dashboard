import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, Checkbox, Label, TextInput } from "flowbite-react"
import { Inputs, LoginSuperadmin } from '../interfaces'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../../hooks/useContext'
import { baseApi } from '../../../api/apiSettings'
import { AiOutlineWarning } from 'react-icons/ai'



export const LoginPage = () => {

    const { signIn, statusUpdate } = useAuthContext()

    const navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors }, setError } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (loginData) => {

        try {

            statusUpdate({ status: 'loading' })
            const { data } = await baseApi.post<LoginSuperadmin>('login', { ...loginData })
            signIn(data)
            navigate('/superadmin')
        } catch (err: any) {
            // statusUpdate({})
            console.log(err);
            setError('email', {
                type: 'manual',
                message: err.response.data.msg
            })
        }


    }


    return (

        <div className=' w-5/6 xl:w-4/12 shadow px-10 py-10 rounded-lg' >

            <h1 className='text-2xl font-bold font-title text-indigo-700 ' >TE DAMOS LA BIENVENIDA A SUPERLOTERY</h1>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} >

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Correo"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="name@flowbite.com"
                        required={true}
                        {...register('email')}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password"
                            value="Contraseña"
                        />
                    </div>
                    <TextInput
                        id="password"
                        type="password"
                        required={true}
                        {...register('password')}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>
                <Button type="submit">
                    Iniciar sesion
                </Button>

                <div className='w-full h-5 flex justify-center items-center' >

                    {errors.email &&
                        <>
                            <AiOutlineWarning className='text-red-500 text-xl mx-2'/>
                            <p
                                className='text-red-500 
                        text-center text-xl 
                        font-semibold' >
                                {errors.email.message}
                            </p>

                        </>

                    }

                </div>
            </form>

        </div>

    )
}
