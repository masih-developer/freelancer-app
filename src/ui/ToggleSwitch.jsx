import { Switch } from "@headlessui/react";

const ToggleSwitch = ({ label, enabled, onChange }) => {
  return (
    <Switch.Group>
      <div className="flex w-24 items-center justify-between">
        <Switch.Label className="mr-4">{label}</Switch.Label>
        <Switch
          checked={enabled}
          onChange={onChange}
          className={`${
            enabled ? "bg-primary-900" : "bg-secondary-300"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          <span
            className={`${
              enabled ? "-translate-x-6" : "-translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-secondary-0 transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};

export default ToggleSwitch;
