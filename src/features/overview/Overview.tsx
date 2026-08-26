import PageLayout from "@/components/shared/PageLayout";
import BudgetsSummary from "./BudgetsSummary";
import FinancialSummary from "./FinancialSummary";
import PotsSummary from "./PotsSummary";
import RecurringBillsSummary from "./RecurringBillsSummary";
import TransationsSummary from "./TransationsSummary";

const Overview = () => {
  return (
    <PageLayout title="Overview">
      <FinancialSummary />

      <div className="space-y-6 pt-8 pb-6">
        <PotsSummary />
        <TransationsSummary />
        <BudgetsSummary />
        <RecurringBillsSummary />
      </div>
    </PageLayout>
  );
};

export default Overview;
