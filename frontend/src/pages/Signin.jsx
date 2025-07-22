import { BottomWrning } from "../component/BottomWarning"
import { Button } from "../component/Button"
import { Heading } from "../component/Heading"
import { InputBox } from "../component/InputBox"
import { SubHeading } from "../component/SubHeading"

export const Signin = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign In"} />
                <SubHeading label={"Enter your credential to access your account"} />
                <InputBox placeholder="johndoe@example.com" label={"Email"} />
                <InputBox placeholder="" label={"Pssword"} />
                <div className="py-4">
                    <Button label={"Sign in"} />
                </div>
                <BottomWrning lable={"Don't have an account?"} buttonText={"sign Up"} to={"/signup"} />
            </div>
        </div>
    </div>
}