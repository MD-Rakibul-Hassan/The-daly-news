import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContext"


export const useAuthContext = () => {
    const data = useContext(AuthContext);
    return data;
}