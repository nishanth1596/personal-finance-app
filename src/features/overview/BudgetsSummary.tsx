import OverviewCard from "@/components/shared/Overview/OverviewCard";
import SummaryItem from "@/components/shared/Overview/SummaryItem";
import BudgetPieChart from "@/components/shared/BudgetPieChart";
import { budgets } from "@/constants/constants";
import { formatPiechartData } from "@/utils/utils";

const BudgetsSummary = () => {
  const budgetData = formatPiechartData(budgets);

  return (
    <OverviewCard link="/budgets" linkName="See Details" title="Budgets">
      <div className="pt-7 md:grid md:grid-cols-[507fr_101fr] md:gap-x-5 md:pt-14">
        <div className="mx-auto max-w-60">
          <BudgetPieChart data={budgetData} />
        </div>
        <div className="grid grid-cols-2 gap-y-4 pt-5 md:grid-cols-1">
          {budgets.slice(0, 4).map((item, i) => (
            <SummaryItem
              color={item.theme}
              title={item.category}
              value={item.maximum}
              key={i}
            />
          ))}
        </div>
      </div>
    </OverviewCard>
  );
};

export default BudgetsSummary;
