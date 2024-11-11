import { useParams } from "react-router-dom";
import UserPage from "../../components/user-page";
import Filters from "./filters";

export default function ProfilePage() {
    const userId = useParams().userId;
    return <UserPage userId={userId} api={`/fetch_user_feed/${userId}`} search="?user_info=true" />
}