import { useState } from "react";
import Table from "../../../ui/Table";
import toLocaleShortDate from "../../../utils/toLocaleShortDate";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import { MdAssignmentAdd } from "react-icons/md";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";

const statusOfProject = {
  OPEN: { label: "باز", className: "badge--success" },
  CLOSED: { label: "بسته", className: "badge--error" },
};

const ProjectTableRow = ({ index, project }) => {
  const { _id, title, budget, deadline, status } = project;
  const [openModal, setOpenModal] = useState(false);

  return (
    <Table.Row className="tbody-row" key={_id}>
      <td>{index + 1}</td>
      <td className="whitespace-pre-wrap">{truncateText(title, 30)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocaleShortDate(deadline)}</td>
      <td>
        <span
          className={`badge mx-auto min-w-10 justify-center ${statusOfProject[status].className}`}
        >
          {statusOfProject[status].label}
        </span>
      </td>
      <td>
        <button
          className="text-lg text-primary-900"
          onClick={() => setOpenModal(true)}
        >
          <MdAssignmentAdd />
        </button>
        <Modal
          title={`درخواست انجام پروژه ${title}`}
          open={openModal}
          onClose={() => setOpenModal(false)}
        >
          <CreateProposal
            projectId={project._id}
            onClose={() => setOpenModal(false)}
          />
        </Modal>
      </td>
    </Table.Row>
  );
};

export default ProjectTableRow;
