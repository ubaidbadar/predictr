import { useContext } from "react";
import RefreshContext from "./context";


export default function useRefresh () {
    return useContext(RefreshContext).onRefresh;
}