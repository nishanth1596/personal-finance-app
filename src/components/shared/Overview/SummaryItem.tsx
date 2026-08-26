type PotsSummaryItemProps = {
  title: string;
  value: number;
  color: string;
};

const SummaryItem = ({ title, value, color }: PotsSummaryItemProps) => {
  return (
    <div className="flex gap-4">
      <div
        className={`w-1 rounded-lg`}
        style={{ backgroundColor: color }}
      ></div>
      <div>
        <p className="text-preset-5 text-grey-500">{title}</p>
        <p className="text-preset-4-bold text-grey-900">${value.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default SummaryItem;
