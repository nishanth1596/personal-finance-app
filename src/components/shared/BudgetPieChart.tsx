// "use client";
// import { budgets } from "@/constants/constants";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const BudgetPieChart = () => {
//   console.log("heya", budgets);
//   // return <div className="pt-7"></div>;
//   <div className="flex h-[400px] w-full items-center justify-center p-4">
//     <ResponsiveContainer width="100%" height="100%">
//       <PieChart>
//         {/* Tooltip shows data data-on-hover */}
//         <Tooltip />

//         {/* Legend maps categories to colors at the bottom */}
//         <Legend layout="horizontal" verticalAlign="bottom" align="center" />

//         <Pie
//           data={data}
//           dataKey="visitors" // The object key containing the numbers
//           nameKey="label" // The object key containing the names/labels
//           cx="50%" // Horizontal center position
//           cy="50%" // Vertical center position
//           outerRadius={120} // Outer size of the pie
//           fill="#8884d8"
//           label={({ label, percent }) =>
//             `${label} ${(percent * 100).toFixed(0)}%`
//           } // Inline text labels
//         >
//           {/* Map over data to assign separate colors to each cell slice */}
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </ResponsiveContainer>
//   </div>;
// };

// export default BudgetPieChart;

import React from "react";

const BudgetPieChart = () => {
  return <div></div>;
};

export default BudgetPieChart;
