import PageLayout from "@/components/shared/PageLayout";
import TransactionsFilters from "./TransactionsFilters";
import Pagination from "@/components/ui/Pagination";

const Transactions = () => {
  return (
    <PageLayout title="Transactions">
      <TransactionsFilters />
      Transaction summary data
      <Pagination />
    </PageLayout>
  );
};

export default Transactions;
