import { useThemeContext } from "../../Hooks/useThemeContext";
import { Link, NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import Swal from "sweetalert2";
import { useAuthContext } from './../../Hooks/useAuthContext';

const Navbar = () => {
  const [iconToggle, setIconToggle] = useState(false);
  const { theme, toggleTheme } = useThemeContext();
  const { user, logOutUser } = useAuthContext();

  const signOutUser = () => {
    logOutUser()
      .then(() => {
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: `Welcome : ${userCreadintail.user.displayName}`,
        showConfirmButton: false,
        timer: 1500,
      });
    })
  }
  return (
    <nav className="flex justify-between py-4">
      <div className="hidden lg:block "></div>

      <ul
        className={` lg:flex gap-5  lg:flex-1 transition  ${
          iconToggle
            ? "block absolute top-[50%] left-[50%] bg-[#898AA6] p-[4rem] rounded-md shadow-sm w-[60%] text-center  z-50 translate-x-[-50%] translate-y-[-50%]  duration-500 ease-in"
            : "hidden"
        }`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "coustom_text text-xl font-bold " : "text-xl"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isActive ? "coustom_text text-xl font-bold " : "text-xl"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isActive ? "coustom_text text-xl font-bold " : "text-xl"
            }
          >
            About
          </NavLink>
        </li>
      </ul>

      <div
        className="lg:hidden text-2xl"
        onClick={() => setIconToggle(!iconToggle)}
      >
        {iconToggle ? <RxCross1 /> : <BiMenuAltLeft />}
      </div>

      <div className="flex items-center gap-5">
        <div>{user ? user?.displayName : '' }</div>
        <>
          <button className="text-xl lg:text-2xl" onClick={toggleTheme}>
            {theme === "dark" ? <FaMoon /> : <MdSunny />}
          </button>
        </>

        <div>
          {user ? (
            <button
              onClick={signOutUser}
              className="px-4 py-2 bg-orange-500/80 text-white font-bold rounded-md shadow-md"
            >
              Logout
            </button>
          ) : (
            <button className="px-4 py-2 bg-lime-500/80 text-white font-bold rounded-md shadow-md">
              {" "}
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
