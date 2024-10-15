import { Link } from "react-router-dom";
import DropDown from "../../../ui/drop-down";
import Avatar from "../../avatar";

export default function User(props) {
    return (
        <DropDown
            className="mt-2"
            component={nProps => (
                <button {...nProps} 
                    className={`flex-center rounded-2 btn-hover h-full px-3 -mx-3 font-medium text-sm gap-[0.429em] ${nProps.className}`}
                >
                    <Avatar className="text-3xl" {...props.user} />
                    {props.user.name}
                </button>
            )}
        >
            <Link to='/'>My Account</Link>
            <Link to='/privacy-and-policy'>Privacy Policy</Link>
            <Link to='/terms-and-conditions'>Terms & Conditions</Link>
            <button>Change Password</button>
            <label htmlFor="Logout-Modal" className="text-red-0">Logout</label>
        </DropDown>
    )
}