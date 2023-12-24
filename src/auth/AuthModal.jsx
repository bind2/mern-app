import React from "react";
import ReactDOM from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import { useStore } from "../context/ContextProvider";
import LoginForm from "../components/login-form/LoginForm";
import RegisterForm from "../components/register-form/RegisterForm";
import ForgotPasswordForm from "../components/forgot-password-form/ForgotPasswordForm";


function AuthModal() {
  const { openOrCloseModal, activeForm } = useStore()

  return ReactDOM.createPortal(
    <div className="modal-wrapper">
      <div className="form-popup">

        <span className="close-btn">
          <IoCloseOutline onClick={openOrCloseModal} />
        </span>

        {activeForm === 'login' && <LoginForm />}
        {activeForm === 'register' && <RegisterForm />}
        {activeForm === 'forgotPassword' && <ForgotPasswordForm />}

      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default AuthModal;
