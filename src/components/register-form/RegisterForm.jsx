import React from 'react'
import { useStore } from '../../context/ContextProvider'
import { VscEdit } from "react-icons/vsc";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import userPic from "../../assets/user-profile-img/default-user-pic.jpg";

function RegisterForm() {
    const {
        isLoading,
        showPass,
        showPassword,
        handleRegisterInput,
        registerDetail,
        handleKeyDown,
        handleProfilePic,
        register,
        switchForm

    } = useStore()
    
    return (
        <div className="form-box signup">
            <div className="form-details">
                <h2>Create Account</h2>
                <p>
                    To become a part of our community, please sign up using your
                    personal information
                </p>
            </div>

            <div className="form-content">
                <h2>SIGNUP</h2>
                <form onSubmit={register}>
                    <div className="profile-pic">
                        <label className="label" htmlFor="file">
                            <VscEdit />
                        </label>
                        <input id="file" type="file" accept="image/*" name="profilePic" onChange={handleProfilePic} />
                        <img src={registerDetail.profilePic ? registerDetail.profilePic : userPic} alt="profilepic" />
                    </div>

                    <h4>New User</h4>

                    <div className="input-field">
                        <input
                            type="username"
                            id="username"
                            name="username"
                            value={registerDetail.username}
                            onChange={handleRegisterInput}
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="username">Enter your username</label>
                    </div>

                    <div className="input-field">
                        <input
                            type="email"
                            id="email-signup"
                            name="email"
                            value={registerDetail.email}
                            onChange={handleRegisterInput}
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="email-signup">Enter you email</label>
                    </div>

                    <div className="input-field">
                        <input
                            type="number"
                            id="number"
                            name="phone"
                            value={registerDetail.phone}
                            onChange={handleRegisterInput}
                            onKeyDown={handleKeyDown}
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="number">Enter you phone number</label>
                    </div>

                    <div className="input-field">
                        <input
                            type={showPassword ? "password" : "text"}
                            id="password-signup"
                            name="password"
                            value={registerDetail.password}
                            onChange={handleRegisterInput}
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="password-signup">Create password</label>
                        {showPassword ? (
                            <FaEye onClick={showPass} />
                        ) : (
                            <FaEyeSlash onClick={showPass} />
                        )}
                    </div>

                    <div className="policy-text">
                        <input type="checkbox" id="policy" />
                        <label htmlFor="policy">
                            I agree the
                            <span href="">Terms & Condition</span>
                        </label>
                    </div>

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? <> <div className="loading-bar"><div className="bar"></div></div> Signing up... </> : 'Signup'}
                    </button>
                </form>

                <div className="bottom-link">
                    Already have an account?
                    <span id="login-link" onClick={() => switchForm('login')}>
                        Sign in
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm