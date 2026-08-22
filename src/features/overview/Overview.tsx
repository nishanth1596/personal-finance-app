import Pots from "./Pots";
import Summary from "./Summary";

const Overview = () => {
  return (
    <section className="order-1 px-4 py-6">
      <h1 className="text-preset-1">Overview</h1>
      <Summary />

      <div className="pt-8 pb-6">
        <Pots />
      </div>
    </section>
  );
};

export default Overview;
