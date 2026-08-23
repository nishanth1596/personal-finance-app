import OverviewCard from "@/components/shared/Overview/OverviewCard";
import { transactions } from "@/constants/constants";
import Image from "next/image";
import { it } from "node:test";

type TransationsSummaryItemProps = {
  avatar: string;
  name: string;
  amount: number;
  date: string;
};

// avatar	"./assets/images/avatars/william-harris.jpg"
// name	"William Harris"
// category	"General"
// date	"2024-07-06T17:10:09Z"
// amount	20.00JS:20
// recurring	false

const TransationsSummaryItem = ({
  avatar,
  name,
  amount,
  date,
}: TransationsSummaryItemProps) => {
  console.log("heya", date);
  return (
    <div className="flex items-center">
      <Image
        alt={name}
        src={avatar}
        height={32}
        width={32}
        className="shrink-0 rounded-full"
      />
      <div className="flex-1">{name}</div>
      <div className="0 shrink">
        <p className="">${amount}</p>
        <p className="">{date}</p>
      </div>
    </div>
  );
};

const TransationsSummary = () => {
  return (
    <OverviewCard title="Transactions" linkName="View All" link="/transactions">
      <div className="">
        {transactions.slice(0, 5).map((item, i) => (
          <TransationsSummaryItem
            avatar={item.avatar}
            amount={item.amount}
            date={item.date}
            name={item.name}
            key={i}
          />
        ))}
      </div>
    </OverviewCard>
  );
};

export default TransationsSummary;
