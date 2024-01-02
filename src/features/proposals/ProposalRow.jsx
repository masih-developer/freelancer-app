import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";

const statusOfProposals = {
  0: { label: "رد شده", className: "badge--error" },
  1: { label: "در انتظار تایید", className: "badge--secondary" },
  2: { label: "تایید شده", className: "badge--success" },
};

const ProposalRow = ({ index, proposal }) => {
  const { _id, description, duration, price, status } = proposal;

  return (
    <Table.Row className="tbody-row" key={_id}>
      <td>{index + 1}</td>
      <td className="whitespace-pre-wrap">{truncateText(description, 60)}</td>
      <td>{toPersianNumbers(duration)} روز</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        <span
          className={`badge mx-auto ${statusOfProposals[status].className}`}
        >
          {statusOfProposals[status].label}
        </span>
      </td>
    </Table.Row>
  );
};

export default ProposalRow;
