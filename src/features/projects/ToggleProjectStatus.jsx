import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";
import ToggleSwitch from "../../ui/ToggleSwitch";

const ToggleProjectStatus = ({ project }) => {
  const enabled = project.status === "OPEN";
  const { toggleProjectStatus, isToggling } = useToggleProjectStatus();

  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({ id: project._id, project: { status } });
  };

  return isToggling ? (
    <div className="flex w-full items-center justify-center">
      <Loading size={10} />
    </div>
  ) : (
    <ToggleSwitch
      label={
        enabled ? (
          <span className="text-sm text-success">باز</span>
        ) : (
          <span className="text-sm text-error">بسته</span>
        )
      }
      enabled={enabled}
      onChange={toggleHandler}
    />
  );
};

export default ToggleProjectStatus;
