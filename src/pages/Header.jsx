import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div>Header</div>
      <div>
        <Link to="/">Signup</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Header;