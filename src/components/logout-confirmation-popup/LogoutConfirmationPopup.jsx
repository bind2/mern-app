import React from 'react'
import { useStore } from '../../context/ContextProvider'
import { HashLink } from 'react-router-hash-link'

function LogoutConfirmationPopup() {
    const {logoutConfirmationHandler, logout} = useStore()
  return (
    <div className="logout-confirmation-wrapper">
        <div className='logout-confirmation-popup'>
        <div>
        <h2>LOGOUT !</h2>
        <p>are you sure you want to logout?</p>
        </div>
        <div>
            <button className='cancel-btn' onClick={logoutConfirmationHandler}>cancel</button>
            <button className='logout-btn' onClick={logout}><HashLink to='/#'>logout</HashLink></button>
        </div>
    </div>
    </div>
  )
}

export default LogoutConfirmationPopup