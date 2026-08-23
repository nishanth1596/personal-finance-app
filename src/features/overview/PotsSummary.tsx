import Image from "next/image";
import OverviewCard from "@/components/shared/Overview/OverviewCard";
import SummaryItem from "@/components/shared/Overview/SummaryItem";
import { pots } from "@/constants/constants";

const PotsSummary = () => {
  return (
    <OverviewCard title="Pots" linkName="See Details" link="/pots">
      <div className="grid grid-cols-1 pt-5">
        <div className="bg-beige-100 flex gap-4 rounded-xl px-4 py-5">
          <Image alt="" src={"/images/icon-pot.svg"} height={34} width={27} />
          <p className="text-preset-4 text-grey-500 flex flex-col">
            Total Saved{" "}
            <span className="text-preset-1 text-grey-900 pt-2.5">$850</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-4 pt-5">
          {pots.slice(0, 4).map((item, i) => (
            <SummaryItem
              key={i}
              color={item.theme}
              title={item.name}
              value={item.total}
            />
          ))}
        </div>
      </div>
    </OverviewCard>
  );
};

export default PotsSummary;
