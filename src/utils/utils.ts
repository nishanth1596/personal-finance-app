import { Budget } from "@/constants/constants";

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const formatAmount = (amount: number) => {
  return `${amount < 0 ? "-$" : "$"}${Math.abs(amount).toFixed(2)}`;
};

export type BudgetChartData = {
  name: string;
  maximum: number;
  spent: number;
  theme: string;
};

export const formatPiechartData = (budgets: Budget[]): BudgetChartData[] => {
  return budgets.map((budget) => ({
    name: budget.category,
    maximum: budget.maximum,
    spent: budget.spent,
    theme: budget.theme,
  }));
};
