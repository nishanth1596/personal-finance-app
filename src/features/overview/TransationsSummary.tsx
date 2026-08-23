import OverviewCard from "@/components/shared/Overview/OverviewCard";
import { transactions } from "@/constants/constants";
import { formatAmount, formatDate } from "@/utils/utils";
import Image from "next/image";

type TransationsSummaryItemProps = {
  avatar: string;
  name: string;
  amount: number;
  date: string;
  isLast: boolean;
};

const TransationsSummaryItem = ({
  avatar,
  name,
  amount,
  date,
  isLast,
}: TransationsSummaryItemProps) => {
  const textColor = amount > 0 ? "text-green" : "text-grey-900";

  return (
    <>
      <div className="flex items-center pb-5">
        <Image
          alt={name}
          src={avatar}
          height={32}
          width={32}
          className="shrink-0 rounded-full"
        />
        <div className="text-preset-4-bold flex-1 pl-4">{name}</div>
        <div className="0 shrink">
          <p className={`text-preset-4-bold ${textColor} text-right`}>
            {formatAmount(amount)}
          </p>
          <p className="text-preset-5 text-grey-500">{formatDate(date)}</p>
        </div>
      </div>
      {!isLast && <div className="bg-grey-100 mb-5 h-px w-full"></div>}
    </>
  );
};

const TransationsSummary = () => {
  return (
    <OverviewCard title="Transactions" linkName="View All" link="/transactions">
      <div className="pt-8">
        {transactions.slice(0, 5).map((item, i) => (
          <TransationsSummaryItem
            avatar={item.avatar}
            amount={item.amount}
            date={item.date}
            name={item.name}
            key={i}
            isLast={i === 4}
          />
        ))}
      </div>
    </OverviewCard>
  );
};

export default TransationsSummary;
