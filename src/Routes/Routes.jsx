import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUP/SignUp';
import Contact from '../Pages/Contact/Contact';
import About from '../Pages/About/About';
import Private from './Private';

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/contact",
        element: (
          <Private>
            <Contact />
          </Private>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
