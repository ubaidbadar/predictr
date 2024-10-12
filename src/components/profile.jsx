import { Link } from "react-router-dom";
import User from "../icons/user-v2";
import Bell from "../icons/bell";
import Help from "../icons/help";
import Shield from "../icons/shield";
import Doc from "../icons/doc";
import Logout from "../icons/logout";

export default function Profile() {
    return (
        <div>
            <Link to='/account'><User />My Account</Link>
            <Link to='/notification-settings'><Bell />Notification Settings</Link>
            <Link to='/help'><Help />FAQs</Link>
            <Link to='/give-feedback'>Give Feedback</Link>
            <Link to='/privacy-and-policy'><Shield />Privacy Policy</Link>
            <Link to='/terms-and-conditions'><Doc /> Terms & Conditions</Link>
            <Link to='/change-password'>Change Password</Link>
            <button><Logout />Logout</button>
        </div>
    )
}