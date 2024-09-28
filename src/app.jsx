import { Route, Routes } from "react-router-dom";
import Leaderboard from "./live/Leaderboard";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Leaderboard />} />
        </Routes>
    )
}