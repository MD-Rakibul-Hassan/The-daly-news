import { Link } from "react-router-dom";
import { HiOutlineEye } from "react-icons/hi";
import { HiEyeOff } from "react-icons/hi";
import { useState } from "react";
import Swal from "sweetalert2";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { updateProfile, sendEmailVerification } from "firebase/auth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {signUpUser} = useAuthContext();

  
  const handleSignUP = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const tarms = form.tarms.checked;
    const password = form.password.value;
    if (name && email && password && tarms) {
      signUpUser(email, password).then((userCreadintail) => {
        sendEmailVerification(userCreadintail.user)
          .then(() => {
            Swal.fire({
              position: "center-center",
              // icon: "success",
              title: "Verifiy Your Email",
              showConfirmButton: false,
              timer: 1500,
            });
           updateProfile(userCreadintail.user, {
             displayName: name,
           }).then(() => {
             Swal.fire({
               position: "center-center",
               icon: "success",
               title: "User Created Successfully",
               showConfirmButton: false,
               timer: 1500,
             });
           });
        })
       
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

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-[#E3DFFD] items-center w-[90%] lg:w-[40%]  p-5 flex flex-col justify-center rounded-md shadow-md">
        <h2 className="coustom_text text-xl lg:text-4xl font-coustom_font font-bold my-4">
          Create An  Account
        </h2>
        <div className="w-[90%] h-[1px] bg-white"></div>
        <form onSubmit={handleSignUP} className="flex flex-col mt-5 w-full ">

          <label htmlFor="name" className="text-black">
            Name  :
          </label>
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            className="h-14 rounded-md outline-none border-0 px-4 text-[#B0A4A4] my-2"
          />

          <label htmlFor="email" className="text-black">
            Email Address :
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="h-14 rounded-md outline-none border-0 px-4 text-[#B0A4A4] my-2"
          />


          <label htmlFor="passowrd" className="text-black">
            Password :
          </label>
          <div className="relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="h-14 rounded-md outline-none border-0 px-4 text-[#B0A4A4] w-full my-2 "
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-[50%] right-5 translate-y-[-50%] text-black"
            >
              {showPassword ? <HiOutlineEye /> : <HiEyeOff />}
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <input type="checkbox" name="tarms" className="w-4 h-4" />
            Accept Tarms and Condition
          </div>

          <button className="px-4 py-2 bg-lime-500/70 text-white font-bold rounded-md my-3">
            Signup
          </button>
          <span className="text-black">
            Have An Account{" "}
            <Link to="/login" className="text-blue-600 underline">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
