import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './../../redux/slices/authSlice';
import { useEffect } from 'react';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const tokenData =
    token && jwtDecode(token).exp * 1000 > Date.now() ? jwtDecode(token) : null;

  function handleLogout() {
    dispatch(logout());
    navigate('/login');
  }

  useEffect(() => {
    !tokenData && handleLogout();
  }, []);

  if (!tokenData) return <h1>Login into account</h1>;

  return (
    <div>
      <h2>Profile Page</h2>
      <h2>{tokenData && tokenData.user.id}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
