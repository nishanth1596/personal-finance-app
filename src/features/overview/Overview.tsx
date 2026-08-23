import FinancialSummary from "./FinancialSummary";
import PotsSummary from "./PotsSummary";
import TransationsSummary from "./TransationsSummary";

const Overview = () => {
  return (
    <section className="order-1 px-4 py-6">
      <h1 className="text-preset-1">Overview</h1>
      <FinancialSummary />

      <div className="space-y-6 pt-8 pb-6">
        <PotsSummary />
        <TransationsSummary />
      </div>
    </section>
  );
};

export default Overview;
