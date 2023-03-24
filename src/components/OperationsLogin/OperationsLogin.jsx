import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, React } from 'react';
import StyledDiv from './OperationsLogin-styles';
import { useAuth } from '../../logic/context/AuthContext';

function OperationsLogin() {
  const [isRememberChecked, setRemember] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { authenticate, isAuthenticated } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await authenticate(email, password)) {
      navigate('/my-account');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/my-account');
    }
  }, [isAuthenticated]);

  return (
    <StyledDiv>
      <h3>Log In</h3>
      <form className="login-form" onSubmit={handleSubmit}>
        <p>Username or email address</p>
        <input
          type="text"
          placeholder="Username or email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="checkbox" onClick={() => setRemember(!isRememberChecked)}>
          <div
            className="checkbox__box"
            style={isRememberChecked ? { backgroundColor: '#faf4f4' } : {}}
          >
            {isRememberChecked && <i className="fa-solid fa-check" />}
          </div>
          <span>Remember me</span>
        </div>
        <div className="operations__login-btn-row">
          <input className="submit-btn" type="submit" value="Log In" />
          <Link to="/forgot-password">Lost Your Password?</Link>
        </div>
      </form>
    </StyledDiv>
  );
}

export default OperationsLogin;
