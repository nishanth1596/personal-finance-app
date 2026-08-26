import Image from "next/image";
import Link from "next/link";

type OverviewCardProps = {
  title: "Pots" | "Transactions" | "Budgets" | "Recurring Bills";
  linkName: "See Details" | "View All";
  link: string;
  children: React.ReactNode;
};

const OverviewCard = ({
  title,
  linkName,
  link,
  children,
}: OverviewCardProps) => {
  return (
    <article className="shadow-card rounded-xl bg-white p-6 md:p-8">
      <div className="flex justify-between">
        <h2 className="text-preset-2 text-grey-900">{title}</h2>
        <Link href={link} className="text-grey-500 flex items-center gap-4">
          {linkName}
          <Image
            alt=""
            src="/images/icon-caret-right.svg"
            width={8.25}
            height={4}
          />
        </Link>
      </div>
      {children}
    </article>
  );
};

export default OverviewCard;
