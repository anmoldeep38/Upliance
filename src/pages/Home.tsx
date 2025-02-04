import React from "react";
import Counter from "../components/Counter";
import UserForm from "../components/UserForm";

const Home: React.FC = () => {
  return (
    <div>
      <Counter />
      <UserForm />
    </div>
  );
};

export default Home;
