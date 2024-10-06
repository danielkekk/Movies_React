import React, {useState} from "react";
import axios from 'axios';

const Login = ({ setAuthToken }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    const headers = {
      'Content-Type': 'multipart/form-data'
    };

    const payload = {
      email: email,
      password: password
    };

    try {
        const response = await axios.post('http://localhost:8000/api/v1/login', payload, {
          headers: headers
        });
        
        setAuthToken(response.data.token);
    } catch (err) {
        setError('Invalid login credentials');
    }
  }

  return (
    <>
      <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
              <div>
                  <label>Email:</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                  <label>Password:</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button type="submit">Login</button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
      </div>
    </>
  );
}

export default Login;
