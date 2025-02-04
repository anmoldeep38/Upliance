import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Dashboard: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const data = [{ name: "Counter", value: count }];

  return (
    <div>
      <h2>Dashboard</h2>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Dashboard;
