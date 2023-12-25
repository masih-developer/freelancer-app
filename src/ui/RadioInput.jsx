const RadioInput = ({
  label,
  value,
  onChange,
  name,
  id,
  register,
  validationSchema = {},
  ...props
}) => {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        type="radio"
        name={name}
        id={id}
        className="form-radio h-4 w-4 cursor-pointer text-primary-900 focus:ring-primary-900"
        value={value}
        onChange={onChange}
        {...register(name, validationSchema)}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioInput;
