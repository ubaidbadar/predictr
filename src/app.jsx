import { Route, Routes } from "react-router-dom";
import Home from "./live/home";
import ProfilePage from "./live/profile-page";
import PostPage from "./live/post-page";

export default function App() {
    return (
        <Routes>
            <Route path="/user/:userId" element={<ProfilePage />}  />
            <Route path="/post" element={<PostPage />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}