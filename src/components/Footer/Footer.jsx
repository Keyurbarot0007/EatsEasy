import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} />
                <p>"Indulge in the convenience of having delicious meals delivered right to your doorstep, with each dish crafted from fresh ingredients to ensure exceptional taste and satisfaction in every bite."</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} />
                    <img src={assets.twitter_icon} />
                    <img src={assets.linkedin_icon} />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@foodies.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 © Foodies.com - All Rights Reserved
        </p>
    </div>
  )
}

export default Footer