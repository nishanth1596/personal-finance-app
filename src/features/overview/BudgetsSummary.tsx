import OverviewCard from "@/components/shared/Overview/OverviewCard";
import SummaryItem from "@/components/shared/Overview/SummaryItem";
import { budgets } from "@/constants/constants";

const BudgetsSummary = () => {
  console.log("heya", budgets);
  return (
    <OverviewCard link="/budgets" linkName="See Details" title="Budgets">
      <div className="pt-7">chart</div>
      <div className="grid grid-cols-2 gap-y-4 pt-5">
        {budgets.slice(0, 4).map((item, i) => (
          <SummaryItem
            color={item.theme}
            title={item.category}
            value={item.maximum}
            key={i}
          />
        ))}
      </div>
    </OverviewCard>
  );
};

export default BudgetsSummary;
