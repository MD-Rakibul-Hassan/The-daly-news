import {RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import {route} from './Routes/Routes.jsx'
import App from './App.jsx'
import './index.css'
import AuthProvider from './Contexts/AuthContext.jsx'
import ThemeProvider from './Contexts/ThemeContext.jsx'
createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthProvider>
      <RouterProvider router={route}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </ThemeProvider>
);
