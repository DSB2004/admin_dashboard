import React from "react";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface IPROPS {
  data: {
    name?: string;
    value?: number;
  }[];
}

const PieGraph: React.FC<IPROPS> = ({ data }) => {
  return (

    <ResponsiveContainer height="100%" width="100%">
      <PieChart>
        <Tooltip />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={110}
          label={true}

          fill="#60A5FA"
          innerRadius={80}
          className="text-xs"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieGraph;
