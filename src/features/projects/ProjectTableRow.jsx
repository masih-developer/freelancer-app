import { TbPencilMinus } from "react-icons/tb";
import Table from "../../ui/Table";
import toLocaleShortDate from "../../utils/toLocaleShortDate";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

const ProjectTableRow = ({
  index,
  project,
  setIsEditOpen,
  setIsDeleteOpen,
  setProjectIden,
}) => {
  return (
    <Table.Row className="tbody-row" key={project._id}>
      <td>{index + 1}</td>
      <td className="whitespace-pre-wrap">{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocaleShortDate(project.deadline)}</td>
      <td>
        <div className="mx-auto flex max-h-[80px] max-w-[200px] flex-wrap items-center justify-center gap-2 overflow-y-auto rounded-lg p-2 shadow-sm ring-1 ring-secondary-100">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge--secondary rounded-full px-2 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project?.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center justify-center gap-x-5">
          <button
            className="text-xl text-blue-500"
            onClick={() => {
              setIsEditOpen(true);
              setProjectIden(project);
            }}
          >
            <TbPencilMinus />
          </button>
          <button
            className="text-xl text-red-500"
            onClick={() => {
              setIsDeleteOpen(true);
              setProjectIden(project);
            }}
          >
            <HiOutlineTrash />
          </button>
        </div>
      </td>
      <td>
        <Link
          to={project._id}
          className="flex items-center justify-center text-xl text-primary-900"
        >
          <HiEye />
        </Link>
      </td>
    </Table.Row>
  );
};

export default ProjectTableRow;
