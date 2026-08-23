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
