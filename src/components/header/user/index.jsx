import DropDown from "../../../ui/drop-down";
import Avatar from "../../avatar";
import Profile from "../../profile";

export default function User(props) {
    return (
        <DropDown
            className="text-sm bg-light-2 mt-1 text-dark-0"
            component={nProps => (
                <button {...nProps} 
                    className={`flex-center rounded-2 btn-hover h-full px-3 -mx-3 font-medium text-sm gap-[0.429em] ${nProps.className}`}
                >
                    <Avatar className="text-3xl" {...props.user} />
                    {props.user.name}
                </button>
            )}
        >
            <Profile />
        </DropDown>
    )
}