import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h2>Profile</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>
    </div>
  );
};

export default Profile;
