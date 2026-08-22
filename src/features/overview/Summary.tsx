type SummaryProps = {
  theme: "light" | "dark";
  title: "Current Balance" | "Income" | "Expenses";
  value: number;
};

const Summary = ({ theme, title, value }: SummaryProps) => {
  const isDark = theme === "dark";

  return (
    <article
      className={`${isDark ? "bg-gray-900" : "bg-white"} rounded-xl p-5`}
    >
      <p className={`${isDark ? "text-white" : "text-gray-500"} text-preset-4`}>
        {title}
      </p>
      <p
        className={`${isDark ? "text-white" : "text-gray-900"} text-preset-1 pt-3`}
      >
        $
        {value.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
    </article>
  );
};

export default Summary;
