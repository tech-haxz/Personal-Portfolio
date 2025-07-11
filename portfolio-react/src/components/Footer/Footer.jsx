import './Footer.css';
import logo from '../../assets/logo1.png';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="logo"  width={150}/>
          <p>I am a full stack python developer from India. Currently i'm pursuing a bachelor degree in computer applications.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="icon" />
            <input type="email" placeholder='Enter your email'/>
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
         <p className="footer-bottom-left">© 2025 Vinay Kumar. All rights reserved.</p> 
         <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
         </div>
      </div>
    </div>
  )
}

export default Footer
