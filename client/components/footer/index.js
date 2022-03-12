import React from 'react';
import { 
  FaFacebookF, FaTwitter, FaInstagram,
  FaLinkedinIn, FaYoutube
} from 'react-icons/fa';

import './styles.scss';

const mockData = [
  [ 'Product', 'Shout Fun', 'Should Blade', 'Should Button', 'Shout Sms'],
  [ 'Explore', 'Causes & Communities', 'Fundraisers'],
  [ 'Help', 'FAQs Give us', 'feedback'],
  [ 'About us', 'About us', 'Term & Conditions', 'Privacy Policy']
]

export const Footer = () => {
  return (
    <footer>
      <div className='social'>
        <img src='../../assets/shout-anz.svg' alt='loading....' className='social_logo' />
        <div className='social_icons'>
          <div className='social_icon'>
            <FaFacebookF />
          </div>
          <div className='social_icon'>
            <FaTwitter />
          </div>
          <div className='social_icon'>
            <FaInstagram />
          </div>
          <div className='social_icon'>
            <FaLinkedinIn />
          </div>
          <div className='social_icon'>
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className='explore'>
        {
          mockData.map((items, index) => (
            <ul key={index} className='explore_nav'>
              <li className='explore_nav-item'>
                {
                  items.map((value, idx) => (
                    <a key={idx} href='#' className='explore_nav-link'>{value}</a>
                  ))
                }
              </li>
            </ul>
          ))
        }
      </div>
      <div className='explain'>
        <p className='explain_text'> Shout fundraising services are provided by Shout For Good Pty Ltd (Shout). 
          Shout is not a bank. Obligations of Shout are not deposits or liabilities of ANZ. ANZ does not stand behind or guarantee Shout or 
          its obligations. Copyright &#169; 2019 Shout For Good Pty Ltd.
        </p>
      </div>
    </footer>
  )
}
