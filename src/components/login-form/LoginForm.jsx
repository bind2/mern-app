import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useStore } from '../../context/ContextProvider';

function LoginForm() {

    const {
        login,
        loginDetail,
        handleLoginInput,
        showPass,
        isLoading,
        showPassword,
        switchForm
    } = useStore()

    return (
        <div className="form-box login">
            <div className="form-details">
                <h2>Welcome back</h2>
                <p>
                    Please login using your personal information to stay connected
                    with us
                </p>
            </div>

            <div className="form-content">
                <h2>LOGIN</h2>
                <form onSubmit={login}>
                    <div className="input-field">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={loginDetail.email}
                            onChange={handleLoginInput}
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className="input-field">
                        <input
                            type={showPassword ? "password" : "text"}
                            id="password"
                            name="password"
                            value={loginDetail.password}
                            onChange={handleLoginInput}
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="password">Password</label>
                        {showPassword ? (
                            <FaEye onClick={showPass} />
                        ) : (
                            <FaEyeSlash onClick={showPass} />
                        )}
                    </div>

                    <span
                        className="forgot-pass"
                        onClick={()=> switchForm('forgotPassword')}
                    >
                        Forgot Password?
                    </span>

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? <> <div className="loading-bar"><div className="bar"></div></div> Logging in... </> : 'login'}
                    </button>

                </form>
                <button className="sign-in-with-google">
                    <FcGoogle /> Sign in with Google
                </button>
                <div className="bottom-link">
                    Don't have an account?
                    <span id="signup-link" onClick={() => switchForm('register')}>
                        Signup
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LoginForm