import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { toast } from "sonner"
import Input from "./ui/Input"

const Login = ({ handleAuthType }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        toast.success('User is Logged In')
    }


    return (
        <div>
            <div className="text-center text-2xl mb-6">Login Here</div>

            <form onSubmit={handleSubmit(onSubmit)} className="container p-6 w-full md:w-[25rem] space-y-4 border border-border">
                <div>
                    <label htmlFor="emailOrUsername">Email</label>
                    <Input
                        id={"emailOrUsername"}
                        name={"emailOrUserName"}
                        type={"text"}
                        register={register}
                        errors={errors}
                        placeholder={"Enter your Email"}
                        className={"w-full mt-2 block"}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input
                        id={"password"}
                        name={"password"}
                        type={"password"}
                        register={register}
                        errors={errors}
                        placeholder={"Enter your Password"}
                        className={"w-full mt-2 block"}
                        required
                    />
                </div>

                <p className="w-full text-xs text-right my-2">
                    New Here ? <Link className="text-blue"
                        onClick={() => handleAuthType(prev => !prev)}>
                        SignUp Yourself
                    </Link>
                </p>

                <button type="submit" className="mt-2 font-medium bg-green w-full rounded-md px-6 py-2">
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Login