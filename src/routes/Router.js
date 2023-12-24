import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../layout/main/Main'
import Home from '../home/Home'
import AdminPanel from '../admin/AdminPanel'
import Navbar from '../layout/navbar/Navbar'
import Footer from '../layout/footer/Footer'
import Profile from '../pages/profile/Profile'
import ProductDetail from '../pages/product-detail/ProductDetail'
import Carts from '../pages/carts/Carts'
import Orders from '../pages/orders/Orders'
import Products from '../pages/products/Products'
import Contact from '../pages/contact/Contact'
import QuestionsAndAnswers from '../pages/questions-and-answers/QuestionsAndAnswers'
import RatingAndReviews from '../pages/rating-and-reviews/RatingAndReviews'
import ForgotPassword from '../pages/forgot-password/ForgotPassword'
import PageNotFound from '../pages/page-not-found/PageNotFound'
import { useStore } from '../context/ContextProvider'
import AuthModal from '../auth/AuthModal'


function Router() {
  const { isLoggedIn } = useStore()
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} >

          {/* public route */}
          <Route path='/' element={<Home />} />
          <Route path='/product-detail' element={<ProductDetail />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/questions-and-ans' element={<QuestionsAndAnswers />} />
          <Route path='/rating-and-reviews' element={<RatingAndReviews />} />
          <Route path='/forgot-pass' element={<ForgotPassword />} />
          <Route path='*' element={<PageNotFound />} />

          {/* private route */}
          <Route path='/profile' element={isLoggedIn ? <Profile /> : <AuthModal />} />
          <Route path='/carts' element={isLoggedIn ? <Carts /> : <AuthModal />} />
          <Route path='/orders' element={isLoggedIn ? <Orders /> : <AuthModal />} />

          {/* protected route */}
          <Route path='/admin' element={isLoggedIn ? <AdminPanel /> : <AuthModal />} />

        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router