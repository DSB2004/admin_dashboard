import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface IPROPS {
  data: {
    name?: string;
    value?: number;
  }[];

}

const LineGraph: React.FC<IPROPS> = ({ data }) => {
  return (
    <ResponsiveContainer height="90%" width="90%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" className="text-xs" />
        <YAxis />
        <Tooltip />
        <Line dataKey="value" fill="#60A5FA" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
