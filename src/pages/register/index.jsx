import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { resetState } from '../../redux/slices/authSlice';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess) {
      navigate('/login');
    }

    return () => {
      dispatch(resetState());
    };
  }, [isSuccess, navigate, dispatch]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { email, password, confirmPassword } = formData;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
    }
    dispatch(register({ email, password }));
  };

  return (
    <div>
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm password"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{message}</p>}
      {isSuccess && <p>Register success</p>}
    </div>
  );
}

export default Register;
