const RHFSelect = ({
  register,
  name,
  label,
  options,
  validationSchema,
  errors,
  loading,
  required,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 flex items-center gap-1 text-sm text-secondary-700"
      >
        {label}
        {required && <span className="text-error">*</span>}
      </label>
      {loading ? (
        <select className="app-input">
          <option value="">انتخاب کنید</option>
        </select>
      ) : (
        <select
          {...register(name, validationSchema)}
          id={name}
          className="app-input"
        >
          <option value="">انتخاب کنید</option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="">
              {option.label}
            </option>
          ))}
        </select>
      )}
      {errors?.[name] && (
        <span className="mt-1 block text-xs text-error">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default RHFSelect;
