type PageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <section className="order-1 px-4 py-6 md:p-10">
      <h1 className="text-preset-1">{title}</h1>
      {children}
    </section>
  );
};

export default PageLayout;
