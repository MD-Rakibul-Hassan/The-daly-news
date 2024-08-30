import { Outlet } from "react-router-dom";
import { useAuthContext } from "./Hooks/useAuthContext";
import { useThemeContext } from "./Hooks/useThemeContext";

function App() {
  const { isTheme, toggleTheme } = useThemeContext();
  return (
    <div className={`container mx-auto px-5`}>
      <Outlet />
    </div>
  );
}

export default App;
