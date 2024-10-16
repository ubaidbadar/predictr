import Portal from "../../../hoc/portal";
import useShow from "../../../hooks/useShow";
import ArrowBack from "../../../icons/arrow-back";
import User from "../../../icons/user";
import styles from './styles.module.scss';
import { Link } from "react-router-dom";
import UserV2 from "../../../icons/user-v2";
import Bell from "../../../icons/bell";
import Help from "../../../icons/help";
import Shield from "../../../icons/shield";
import Doc from "../../../icons/doc";
import Logout from "../../../icons/logout";
import Key from "../../../icons/key";
import Thumb from "../../../icons/thumb";

export default function Profile() {
    const tools = useShow();
    return (
        <>
            <button onClick={tools.open}>
                <User /> Profile
            </button>
            {tools.className && (
                <Portal id="Modals">
                    <div
                        className={`bg-surface z-3 absolute-full bottom-14 ${styles.root} transition-opacity ${tools.className === "active" ? "animation-opacity" : "duration-300 opacity-0"}`}
                    >
                        <button onClick={tools.close} className="h-11 border-b-1 border-light-0 gap-2">
                            <ArrowBack /> Menu
                        </button>
                        <Link to='/account'><UserV2 />My Account</Link>
                        <Link to='/notification-settings'><Bell strokeWidth="1.5" />Notification Settings</Link>
                        <Link to='/help'><Help />FAQs</Link>
                        <Link to='/give-feedback'><Thumb strokeWidth="0" /> Give Feedback</Link>
                        <Link to='/privacy-and-policy'><Shield />Privacy Policy</Link>
                        <Link to='/terms-and-conditions'><Doc /> Terms & Conditions</Link>
                        <Link to='/change-password'><Key /> Change Password</Link>
                        <button><Logout />Logout</button>
                    </div>
                </Portal>
            )}
        </>
    )
}