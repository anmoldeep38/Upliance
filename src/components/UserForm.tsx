import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser, generateUserId } from "../redux/userSlice";

const UserForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(generateUserId());
    dispatch(updateUser(form));
    alert("User Data Saved!");
  };

  return (
    <div>
      <h2>User Form</h2>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <input placeholder="Address" onChange={(e) => setForm({ ...form, address: e.target.value })} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default UserForm;
