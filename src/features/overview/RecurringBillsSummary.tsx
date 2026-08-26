import OverviewCard from "@/components/shared/Overview/OverviewCard";
import { recurringBills } from "@/constants/constants";

type RecurringBillsItemProps = {
  item: {
    name: string;
    amount: number;
    color: string;
  };
};

const RecurringBillsItem = ({ item }: RecurringBillsItemProps) => {
  const bg = item.color;

  return (
    <div
      className="bg-beige-100 border-green rounded-lg border-l-4 px-4 py-5"
      style={{ borderColor: bg }}
    >
      <div className="flex items-center justify-between">
        <p className="text-preset-4 text-grey-500">{item.name}</p>
        <p className="text-preset-4-bold text-grey-900">
          ${item.amount.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

const RecurringBillsSummary = () => {
  return (
    <OverviewCard link="/bills" linkName="See Details" title="Recurring Bills">
      <div className="space-y-3 pt-8">
        {recurringBills.map((item, i) => (
          <RecurringBillsItem item={item} key={i} />
        ))}
      </div>
    </OverviewCard>
  );
};

export default RecurringBillsSummary;
