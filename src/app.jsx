import { Route, Routes } from "react-router-dom";
import Home from "./live/home";
import ProfilePage from "./live/profile-page";

export default function App() {
    return (
        <Routes>
            <Route path="/user/:userId" element={<ProfilePage />}  />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}