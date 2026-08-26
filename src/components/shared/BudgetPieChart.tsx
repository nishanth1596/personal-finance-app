"use client";

import type { BudgetChartData } from "@/utils/utils";
import { Cell, Pie, PieChart } from "recharts";

type BudgetPieChartProps = {
  data: BudgetChartData[];
};

const BudgetPieChart = ({ data }: BudgetPieChartProps) => {
  const totalLimit = data.reduce((total, item) => total + item.maximum, 0);

  const totalSpent = data.reduce((total, item) => total + item.spent, 0);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[500px]">
      <PieChart
        responsive
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* Outer ring - budget limit */}
        <Pie
          data={data}
          dataKey="maximum"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          stroke="white"
          strokeWidth={2}
          isAnimationActive={false}
          startAngle={90}
          endAngle={-270}
        >
          {data.map((item) => (
            <Cell key={item.name} fill={item.theme} />
          ))}
        </Pie>

        {/* Inner ring - amount spent */}
        <Pie
          data={data}
          dataKey="maximum"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius="45%"
          outerRadius="60%"
          stroke="white"
          strokeWidth={2}
          fillOpacity={0.35}
          isAnimationActive={false}
          startAngle={90}
          endAngle={-270}
        >
          {data.map((item) => (
            <Cell key={item.name} fill={item.theme} />
          ))}
        </Pie>
      </PieChart>

      {/* Center of donut */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-preset-1 text-grey-900">${totalSpent.toFixed(0)}</p>

        <p className="text-preset-4 text-grey-500">
          of ${totalLimit.toFixed(0)} limit
        </p>
      </div>
    </div>
  );
};

export default BudgetPieChart;
