import Dropdown from "@/components/ui/Dropdown";
import SearchBar from "@/components/ui/SearchBar";

const TransactionsFilters = () => {
  return (
    <div className="flex items-center justify-between">
      <SearchBar />
      <Dropdown theme="sort by" />
      <Dropdown theme="category filter" />
    </div>
  );
};

export default TransactionsFilters;
