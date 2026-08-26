import OverviewCard from "@/components/shared/Overview/OverviewCard";
import SummaryItem from "@/components/shared/Overview/SummaryItem";
import BudgetPieChart from "@/components/shared/BudgetPieChart";
import { budgets } from "@/constants/constants";
import { formatPiechartData } from "@/utils/utils";

const BudgetsSummary = () => {
  const budgetData = formatPiechartData(budgets);

  return (
    <OverviewCard link="/budgets" linkName="See Details" title="Budgets">
      <BudgetPieChart data={budgetData} />
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
