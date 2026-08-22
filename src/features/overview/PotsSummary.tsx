import Image from "next/image";
import Link from "next/link";

type PotsSummaryItemProps = {
  title: string;
  value: number;
  color: string;
};

const PotsSummaryItem = ({ title, value, color }: PotsSummaryItemProps) => {
  return (
    <div className="flex gap-4">
      <div className={`${color} w-1 rounded-lg`}></div>
      <div>
        <p className="text-preset-5 text-grey-500">{title}</p>
        <p className="text-preset-4-bold text-grey-900">${value}</p>
      </div>
    </div>
  );
};

const PotsSummary = () => {
  return (
    <article className="shadow-card rounded-xl bg-white p-6">
      <div className="flex justify-between">
        <h2 className="text-preset-2 text-grey-900">Pots</h2>
        <Link href={"/pots"} className="text-grey-500 flex items-center gap-4">
          See Details
          <Image
            alt=""
            src={"/images/icon-caret-right.svg"}
            width={8.25}
            height={4}
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 pt-5">
        <div className="bg-beige-100 flex gap-4 rounded-xl px-4 py-5">
          <Image alt="" src={"/images/icon-pot.svg"} height={34} width={27} />
          <p className="text-preset-4 text-grey-500 flex flex-col">
            Total Saved{" "}
            <span className="text-preset-1 text-grey-900 pt-2.5">$850</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-4 pt-5">
          <PotsSummaryItem color="bg-green" title="Savings" value={159} />
          <PotsSummaryItem color="bg-cyan" title="Gift" value={40} />
          <PotsSummaryItem color="bg-navy" title="Concert Ticket" value={110} />
          <PotsSummaryItem color="bg-yellow" title="New Laptop" value={10} />
        </div>
      </div>
    </article>
  );
};

export default PotsSummary;
