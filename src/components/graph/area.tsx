import React, { FC } from "react";
import {
  AreaChart,
  Area,
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

const AreaGraph: React.FC<IPROPS> = ({ data }) => {
  return (


    <ResponsiveContainer height="90%" width="90%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" className="text-xs" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#60A5FA"
          fill="#9CC8FF"
        />
      </AreaChart>
    </ResponsiveContainer>

  );
};

export default AreaGraph;
