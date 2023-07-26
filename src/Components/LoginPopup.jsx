
import React ,{useState} from 'react';
import './LoginPopup.css'; 
import axios from 'axios'
import logo from '../images/logo.png'
import download1 from '../images/download1.png'

const LoginPopup = ({ onClose }) => {
  const handleGoBack = () => {
    onClose();
    window.history.back(); 
  };

  const generateCaptcha = () => {
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha());

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8081/login',{email,password})
    .then(res=> console.log(res))
    .catch(err=> console.log(err));
  };

  

  const handleReloadCaptcha = () => {
    setCaptcha(generateCaptcha());
  };
  return (
    <div className="login-popup">
      <span className="close-icon" onClick={handleGoBack}>
        &times;
      </span>
      
      <h2>Login </h2>
      <hr/>
      {<p style={{fontSize:14}}>Not member yet?Click <a href='#'>here</a></p>}
      <div className='logo-container'>
        <img src={logo} className='logo' alt='' />
      </div>
      <br />
      <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          id="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
       
      <div>
       
        <div className={`password-input ${showPassword ? 'show-border' : ''}`}>
          <input
            type={showPassword ? 'text' : 'password'}
         
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eye-icon" onClick={handleShowPassword}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
      </div>
      <div className="forgot-password">
        <a href="#">Forgot Password ?</a>
      </div>
      <div className="captcha-input">
        <input type="text" id="captcha" placeholder='Captcha' />
        <br />
        <span className="captcha-text">{captcha}</span>
        <br />
        <span className="reload-icon" onClick={handleReloadCaptcha}>
          &#x21bb;
        </span>
      </div>
      <button type="submit" className='submit'>Submit</button>
    </form>
    <div className="divider">
        <hr className="line" />
        <span className="or-text">OR</span>
        <hr className="line" />
      </div>
      <div className="login-with-google">
        <span>Login with Google</span>
        <img src={download1} alt='' />
      </div>
      <span className="close-icon" onClick={onClose}>
        &times;
      </span>
    </div>
  );
};

export default LoginPopup;
