import { toPersianNumbersWithComma } from "../utils/toPersianNumbers";

const COLORS = {
  primary: "bg-primary-500/30 text-primary-900",
  green: "bg-green-500/30 text-green-500",
  yellow: "bg-yellow-500/30 text-yellow-500",
};

const Stat = ({ title, value, icon, color = "primary" }) => {
  return (
    <div className="col-span-12 rounded-lg bg-secondary-0 p-5 sm:col-span-6 lg:col-span-4">
      <div className="flex gap-5">
        <div
          className={`flex size-28 shrink-0 items-center justify-center rounded-full ${COLORS[color]}`}
        >
          <span className="text-7xl">{icon}</span>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-secondary-900">{title}</h3>
          <h4 className="mt-3 text-2xl font-medium text-secondary-900">
            {toPersianNumbersWithComma(value)}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Stat;
