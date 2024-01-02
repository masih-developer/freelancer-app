import { HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";
import ErrorTitle from "../../ui/ErrorTitle";
import Stat from "../../ui/Stat";

const Stats = ({ proposals }) => {
  const countsOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((project) => project.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  if (!countsOfProposals)
    return <ErrorTitle title="هنوز هیچ پیشنهادی به ثبت نرسیده است." />;

  return (
    <div>
      <div className="mt-5 grid grid-cols-12 gap-5">
        <Stat
          title="پیشنهادات"
          value={countsOfProposals}
          icon={<HiOutlineViewGrid />}
          color="primary"
        />
        <Stat
          title="پیشنهادات پذیرفته شده"
          value={acceptedProposals.length}
          icon={<HiCurrencyDollar />}
          color="green"
        />
        <Stat
          title="کیف پول"
          value={balance}
          icon={<HiCurrencyDollar />}
          color="yellow"
        />
      </div>
    </div>
  );
};

export default Stats;
