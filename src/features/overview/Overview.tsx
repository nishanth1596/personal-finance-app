import Summary from "./Summary";

const Overview = () => {
  return (
    <section className="order-1 px-4 py-6">
      <h1 className="text-preset-1">Overview</h1>

      <article className="flex flex-col gap-3 py-8">
        <Summary theme="dark" title="Current Balance" value={4836} />
        <Summary theme="light" title="Income" value={3814.25} />
        <Summary theme="light" title="Expenses" value={1700.50} />
      </article>
    </section>
  );
};

export default Overview;
