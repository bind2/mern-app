import React from 'react'
import seller from '../../assets/footer-img/seller.svg'
import giftCard from '../../assets/footer-img/gift_card.svg'
import helpCenter from '../../assets/footer-img/help_center.svg'
import advertise from '../../assets/footer-img/advertise.svg'
import paymentMethod from '../../assets/footer-img/payment-method.svg'
import { HashLink } from 'react-router-hash-link'



function Footer() {
  return (
    <footer>
      <div className="container" id='footer'>
        <div className="about">
          <h4>ABOUT</h4>
          <ul>
            <li><HashLink to="/contact#">Contact Us</HashLink></li>
            <li><HashLink to="/aboutus#">About Us</HashLink></li>
            <li><HashLink to="/careers#">Careers</HashLink></li>
            <li><HashLink to="/flipkart-stories#">Flipkart Stories</HashLink></li>
            <li><HashLink to="/press#">Press</HashLink></li>
            <li><HashLink to="/cleartrip#">Cleartrip</HashLink></li>
            <li><HashLink to="/corporate#">Corporate Information</HashLink></li>
          </ul>
        </div>
        <div className="help">
          <h4>HELP</h4>
          <ul>
            <li><HashLink to="/payments#">Payments</HashLink></li>
            <li><HashLink to="/shipping#">Shipping</HashLink></li>
            <li><HashLink to="/cancellation#">Cancellation & Returns</HashLink></li>
            <li><HashLink to="/faq#">FAQ</HashLink></li>
            <li><HashLink to="/report#">Report Infringement</HashLink></li>
          </ul>
        </div>
        <div className="consumer-policy">
          <h4>CONSUMER POLICY</h4>
          <ul>
            <li><HashLink to="/cancellation#">Cancellation & Returns</HashLink></li>
            <li><HashLink to="/Terms#">Terms Of Use</HashLink></li>
            <li><HashLink to="/security#">Security</HashLink></li>
            <li><HashLink to="/privacy#">Privacy</HashLink></li>
            <li><HashLink to="/sitemap#">Sitemap</HashLink></li>
            <li><HashLink to="/grievance#">Grievance Redressal</HashLink></li>
            <li><HashLink to="/epr#">EPR Compliance</HashLink></li>
          </ul>
        </div>
        <div className="social">
          <h4>SOCIAL</h4>
          <ul>
            <li><HashLink to="/facebook#">Facebook</HashLink></li>
            <li><HashLink to="/twitter#">Twitter</HashLink></li>
            <li><HashLink to="/youtube#">YouTube</HashLink></li>
          </ul>
        </div>
        <div className="mail-us">
          <h4>Mail Us:</h4>
          <address>
            <p>Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia &</p>
            <p>Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
          </address>
        </div>
        <div className="registered-office">
          <h4>Registered Office Address:</h4>
          <address>
            <p>Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia &</p>
            <p>Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
            <p>CIN : U51109KA2012PTC066107</p>
            <p>Telephone: <HashLink to='tel:044-45614700'> 044-45614700</HashLink></p>
          </address>
        </div>
      </div>
      <hr />
      <div className="container" id='copyright'>

        <div className="seller">
          <HashLink to="seller#">
            <img src={seller} alt="seller" />
            Become a Seller
          </HashLink>
        </div>

        <div className="advertise">
          <HashLink to="advertise#">
            <img src={advertise} alt="advertise" />
            Advertise
          </HashLink>
        </div>

        <div className="gift-card">
          <HashLink to="gift-card#">
            <img src={giftCard} alt="gift-card" />
            Gift Cards
          </HashLink>
        </div>

        <div className="help-center">
          <HashLink to="help-center#">
            <img src={helpCenter} alt="help-center" />
            Help Center
          </HashLink>
        </div>

        <div className="copyright-text">
          <span>
            &copy; 2007-2023 Flipkart.com
          </span>
        </div>

        <div className="payment-method">
          <span>
            <img src={paymentMethod} alt="payment-method" />
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer