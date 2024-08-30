import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineEye } from "react-icons/hi";
import { HiEyeOff } from "react-icons/hi";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { useAuthContext } from "../../Hooks/useAuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  const { logInUser, forgetPassword } = useAuthContext();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (email && password) {
      logInUser(email, password).then((userCreadintail) => {
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: `Welcome : ${userCreadintail.user.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state ? location.state : "/");
      });
    } else {
      Swal.fire({
        position: "top-right",
        icon: "error",
        title: "Please fill the form",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (email) {
      forgetPassword(email).then(() => {
        Swal.fire({
          position: "top-right",
          icon: "success",
          title: "Password Reset Email Sended ",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    } else {
      Swal.fire({
        position: "top-right",
        icon: "error",
        title: "Please Provide Email! ",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-[#E3DFFD] items-center w-[90%] lg:w-[40%]  p-5 flex flex-col justify-center rounded-md shadow-md">
        <h2 className="coustom_text text-xl lg:text-4xl font-coustom_font font-bold my-4">
          Login Your Account
        </h2>
        <div className="w-[90%] h-[1px] bg-white"></div>
        <form onSubmit={handleLogin} className="flex flex-col mt-5 w-full ">
          <label htmlFor="email" className="text-black">
            Email Address :
          </label>
          <input
            type="email"
            ref={emailRef}
            name="email"
            placeholder="Email"
            className="h-14 rounded-md outline-none border-0 px-4 text-[#B0A4A4] my-2"
          />
          <label htmlFor="passowrd" className="text-black">
            Password :
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="h-14 rounded-md outline-none border-0 px-4 text-[#B0A4A4] w-full my-2 "
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[40%] right-5 translate-y-[-50%] text-black"
            >
              {showPassword ? <HiOutlineEye /> : <HiEyeOff />}
            </span>
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={handleForgetPassword}
            >
              Forget Password
            </span>
          </div>

          <button className="px-4 py-2 bg-lime-500/70 text-white font-bold rounded-md my-3">
            Login
          </button>
          <span className="text-black">
            Don't Have An Account{" "}
            <Link to="/signup" className="text-blue-600 underline">
              Regester
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
