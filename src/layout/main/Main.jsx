import React from 'react'
import AuthModal from '../../auth/AuthModal'
import LogoutConfirmationPopup from '../../components/logout-confirmation-popup/LogoutConfirmationPopup'
import { Outlet } from 'react-router-dom'
import { useStore } from '../../context/ContextProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Main() {
  const { modalState, logoutState } = useStore()
  return (
    <main>
      <Outlet />
      <ToastContainer
        style={{ fontSize: "14px", zIndex: "99999" }}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {modalState && <AuthModal />}
      {logoutState && <LogoutConfirmationPopup/>}
    </main>
  )
}

export default Main