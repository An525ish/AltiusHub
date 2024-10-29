import { validateEmail, validatePassword, validateUserName } from "@/utils/validator"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { toast } from "sonner"
import AvatarInput from "./ui/AvatarInput"
import Input from "./ui/Input"
import { useState } from "react"

const Register = ({ handleAuthType }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onChange' })
    const [avatar, setAvatar] = useState()

    const onSubmit = (data) => {
        console.log({ ...data, avatar })
        toast.success("User is Registered")
    }

    console.log(errors)


    return (
        <div className=" border border-border p-4">
            <div className="text-center text-2xl mb-4">Register Here</div>

            <form onSubmit={handleSubmit(onSubmit)} className="container w-full md:w-[25rem] space-y-4">
                <AvatarInput setAvatar={setAvatar} />

                <div>
                    <label htmlFor="email">Email</label>
                    <Input
                        id={"email"}
                        name={"email"}
                        type={"email"}
                        register={register}
                        errors={errors}
                        validate={validateEmail}
                        placeholder={"Enter your Email"}
                        className={"w-full mt-2 block"}
                    />
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <Input
                        id={"username"}
                        name={"username"}
                        type={"text"}
                        register={register}
                        errors={errors}
                        validate={validateUserName}
                        placeholder={"Enter your Username"}
                        className={"w-full mt-2 block"}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input
                        id={"password"}
                        name={"password"}
                        type={"password"}
                        validate={validatePassword}
                        register={register}
                        errors={errors}
                        placeholder={"Enter your Password"}
                        className={"w-full mt-2 block"}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Input
                        id={"confirmPassword"}
                        name={"confirmPassword"}
                        type={"password"}
                        register={register}
                        errors={errors}
                        validate={(value) => {
                            return value === watch('password') || 'Password do not match'
                        }}
                        placeholder={"Re-Enter your Password"}
                        className={"w-full mt-2 block"}
                    />
                </div>

                <p className="w-full text-xs text-right my-2">
                    Already an User ? <Link
                        className="text-blue"
                        onClick={() => handleAuthType(prev => !prev)}>
                        Login Here
                    </Link>
                </p>

                <button type="submit" className="mt-2 font-medium bg-green w-full rounded-md px-6 py-2">
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Register