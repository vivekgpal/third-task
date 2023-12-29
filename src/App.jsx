import { useState } from 'react'
import logo from "./assets/smartserv.png"
import './App.css'

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;


    if (!emailRegex.test(username)) {
      setUsernameError('Please enter a valid email address');
      return;
    }


    if (!passwordRegex.test(password)) {
      setPasswordError('Password must contain at least 8 characters with at least one uppercase letter, one number, and only @ as a special character');
      return;
    }

    console.log('Form submitted with username:', username, 'and password:', password);
  };

  return (
    <form onSubmit={handleSubmit} className='inner-box'>

      <img src={logo} alternate="logo" />
      <div className='Email'>
        
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <span className="error">{usernameError}</span>
      </div>
      <div className='Password'>
        
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <span className="error">{passwordError}</span>
      </div>

      <button type="submit" className='btn'>Login</button>

      <div className='forget-password'>
        <a href='#'>Forgot your password?</a>
      </div>
    </form>
  );
}

export default App
