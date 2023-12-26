const RHFSelect = ({ register, name, label, options, required }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 flex items-center gap-1 text-sm text-secondary-700"
      >
        {label}
        {required && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} id={name} className="app-input">
        {options.map((option) => (
          <option key={option.value} value={option.value} className="">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RHFSelect;
