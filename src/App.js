import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import Profile from './pages/profile';
import ProtectedRoute from './components/protectedRoute';

function App() {
  return (
    <div className="App">
      <nav style={{ display: 'flex', gap: '15px' }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default App;
