import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaUsers, FaRegLightbulb, FaEnvelopeOpenText, FaSignOutAlt } from "react-icons/fa";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="home-container">
      <h2 className="home-heading">ConnectSphere {user?.name}</h2>

      <div className="nav-links">
        <Link to="/update-profile">
          <FaUser className="icon" /> My Profile
        </Link>

        <Link to="/friends">
          <FaUsers className="icon" /> Friends
        </Link>

        <Link to="/suggestions">
          <FaRegLightbulb className="icon" /> Suggestions
        </Link>

        <Link to="/requests">
          <FaEnvelopeOpenText className="icon" /> Requests
        </Link>

        <button onClick={handleLogout}>
          <FaSignOutAlt className="icon" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
