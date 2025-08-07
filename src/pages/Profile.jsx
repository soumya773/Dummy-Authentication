import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import React from 'react';


const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p>Full Name : {user?.fullName}</p>
      <p>Email : {user?.email}</p>
      <p>Password : {user?.password}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Profile;
