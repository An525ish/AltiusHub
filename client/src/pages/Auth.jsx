import Login from "@/components/Login"
import Register from "@/components/Register"
import { useState } from "react"

const Auth = () => {
    const [isSignInClicked, setisSignInClicked] = useState(true)

    return (
        <div className="h-screen">
            <h1 className="font-semibold text-center text-3xl py-4">AltiusHub</h1>
            <div className="grid h-[90vh] place-items-center">
                {isSignInClicked ?
                    <Login handleAuthType={setisSignInClicked} />
                    :
                    <Register handleAuthType={setisSignInClicked} />
                }
            </div>
        </div>
    )
}

export default Auth