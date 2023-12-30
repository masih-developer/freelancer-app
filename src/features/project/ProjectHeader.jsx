import { HiArrowRight } from "react-icons/hi";
import useBackPage from "../../hooks/useBackPage";

const ProjectHeader = ({ project }) => {
  const moveBack = useBackPage();

  return (
    <div className="mb-8 flex items-center gap-x-5">
      <button className="text-xl text-secondary-500" onClick={moveBack}>
        <HiArrowRight />
      </button>
      <h1 className="font-black text-secondary-700">
        لیست درخواست های {project.title}
      </h1>
    </div>
  );
};

export default ProjectHeader;
