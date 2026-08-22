type SummaryProps = {
  theme: "light" | "dark";
  title: "Current Balance" | "Income" | "Expenses";
  value: number;
};

const SummaryItem = ({ theme, title, value }: SummaryProps) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`${isDark ? "bg-gray-900" : "bg-white"} shadow-card rounded-xl p-5`}
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
    </div>
  );
};

const Summary = () => {
  return (
    <article className="flex flex-col gap-3 pt-8">
      <SummaryItem theme="dark" title="Current Balance" value={4836} />
      <SummaryItem theme="light" title="Income" value={3814.25} />
      <SummaryItem theme="light" title="Expenses" value={1700.5} />
    </article>
  );
};

export default Summary;
