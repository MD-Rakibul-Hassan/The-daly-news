import { useContext } from "react"
import { ThemeContext } from "../Contexts/ThemeContext"

export const useThemeContext = () => {
    const theme = useContext(ThemeContext);
    return theme;
}