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
        <img src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='loading....' className='social__logo' />
        <div className='social__icons'>
          <div className='social__icon'>
            <FaFacebookF />
          </div>
          <div className='social__icon'>
            <FaTwitter />
          </div>
          <div className='social__icon'>
            <FaInstagram />
          </div>
          <div className='social__icon'>
            <FaLinkedinIn />
          </div>
          <div className='social__icon'>
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className='explore'>
        {
          mockData.map((items, index) => (
            <ul key={index} className='explore__nav'>
              <li className='explore__nav--item'>
                {
                  items.map((value, idx) => (
                    <a key={idx} href='#' className='explore__nav--link'>{value}</a>
                  ))
                }
              </li>
            </ul>
          ))
        }
      </div>
      <div className='explain'>
        <p className='explain__text'> Shout fundraising services are provided by Shout For Good Pty Ltd (Shout). 
          Shout is not a bank. Obligations of Shout are not deposits or liabilities of ANZ. ANZ does not stand behind or guarantee Shout or 
          its obligations. Copyright &#169; 2019 Shout For Good Pty Ltd.
        </p>
      </div>
    </footer>
  )
}
