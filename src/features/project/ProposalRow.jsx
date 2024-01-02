import Table from "../../ui/Table";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

const statusOfProposals = {
  0: { label: "رد شده", className: "badge--error" },
  1: { label: "در انتظار تایید", className: "badge--secondary" },
  2: { label: "تایید شده", className: "badge--success" },
};

const ProposalRow = ({
  index,
  proposal,
  setIsChangeModal,
  setProposalInfo,
}) => {
  const { user, description, duration, price, status } = proposal;

  return (
    <Table.Row className="tbody-row">
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>
        <p className="">{truncateText(description, 50)}</p>
      </td>
      <td>{duration} روز</td>
      <td>{toPersianNumbersWithComma(price)} تومان</td>
      <td>
        <span
          className={`badge mx-auto ${statusOfProposals[status].className}`}
        >
          {statusOfProposals[status].label}
        </span>
      </td>
      <td>
        <button
          className="app-btn mx-auto w-fit text-sm"
          onClick={() => {
            setProposalInfo(proposal);
            setIsChangeModal(true);
          }}
        >
          تغییر وضعیت
        </button>
      </td>
    </Table.Row>
  );
};

export default ProposalRow;
