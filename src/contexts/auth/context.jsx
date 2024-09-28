import { createContext } from "react";
import state from "./state";

const AuthContext = createContext({ user: state, isLoggedIn: false });

export default AuthContext;