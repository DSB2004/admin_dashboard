import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface IPROPS {
  data: {
    name?: string;
    value?: number;
  }[];
}

const BarGraph: React.FC<IPROPS> = ({ data }) => {
  return (

    <ResponsiveContainer height="90%" width="90%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" className="text-xs" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="value" fill="#60A5FA" />
      </BarChart>
    </ResponsiveContainer>

  );
};

export default BarGraph;
