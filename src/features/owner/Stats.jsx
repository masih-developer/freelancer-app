import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import ErrorTitle from "../../ui/ErrorTitle";
import Stat from "../../ui/Stat";

const Stats = ({ projects }) => {
  const countsOfProjects = projects.length;
  const countsOfAcceptedProjects = projects.map(
    (project) => project.status === 2,
  ).length;
  const countsOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0,
  );

  if (!countsOfProjects)
    return <ErrorTitle title="هنوز هیچ پروژه ای به ثبت نرسیده است." />;

  return (
    <div>
      <div className="mt-5 grid grid-cols-12 gap-5">
        <Stat
          title="پروژه ها"
          value={countsOfProjects}
          icon={<HiOutlineViewGrid />}
          color="primary"
        />
        <Stat
          title="پروژه های واگذار شده"
          value={countsOfAcceptedProjects}
          icon={<HiCurrencyDollar />}
          color="green"
        />
        <Stat
          title="درخواست ها"
          value={countsOfProposals}
          icon={<HiCollection />}
          color="yellow"
        />
      </div>
    </div>
  );
};

export default Stats;
