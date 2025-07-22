import { Appbar } from "../component/Appbar"
import { Balance } from "../component/Balance"
import { Users } from "../component/Users"


export const Dashboard = () => {
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={"10,000"} />
            <Users />
        </div>
    </div>
}