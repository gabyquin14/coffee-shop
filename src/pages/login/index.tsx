import React, { FC } from "react";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useAppDispatch } from "../../redux/store";
import { addUser, removeUser } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL || undefined,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => console.log(error));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        toast.success("Log out successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <div className="login-buttons-container">
        <button className="login-button" onClick={handleGoogleLogin}>
          <FcGoogle /> <span>Sign in with Google</span>
        </button>
        <button className="logout-button" onClick={handleSignOut}>
          Log out
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;
