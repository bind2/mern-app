import React from 'react'
import { useStore } from '../../context/ContextProvider'

function ForgotPasswordForm() {

    const {
        switchForm
    } = useStore()

    return (
        <div className="form-box forgot-password">
            <div>
                <h2>Forgot Password</h2>
                <form>
                    <div className="input-field">
                        <label htmlFor="email-forgot">Email</label>
                        <input type="email" id="email-forgot" name="email" placeholder="enter your email" />
                    </div>
                    <span onClick={()=> switchForm('login')} >back to login</span>
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPasswordForm