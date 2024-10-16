import { NavLink } from "react-router-dom";
import Home from "../../icons/home";
import Leaderboard from "../../icons/leaderboard";
import CrossCircle from "../../icons/cross-circle";
import Bell from "../../icons/bell";
import styles from './footer.module.scss';
import Profile from "./profile";

export default function Footer() {
    return (
        <>
            <div className="h-14 order-1" />
            <div className={`flex-between text-xs z-2 fixed bottom-0 left-0 right-0 text-center cont-p h-14 bg-light-5 ${styles.root}`}>
                <NavLink to="/">
                    <Home /> Home
                </NavLink>
                <NavLink to="/leaderboard">
                    <Leaderboard /> Leaderboard
                </NavLink>
                <NavLink to="/prediction">
                    <CrossCircle /> Prediction
                </NavLink>
                <NavLink to='/notification'>
                    <Bell /> Notification
                </NavLink>
                <Profile />
            </div>
        </>
    )
}