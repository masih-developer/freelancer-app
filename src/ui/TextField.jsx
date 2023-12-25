const TextField = ({
  register,
  name,
  label,
  type = "text",
  id,
  className,
  placeholder,
  autoComplete = "off",
  required,
  validationSchema = {},
  errors,
  ...props
}) => {
  return label ? (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="mb-2 flex items-center gap-1 text-sm text-secondary-700"
      >
        {label}
        {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        type={type}
        id={id}
        className={`app-input ${className}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...props}
      />
      {errors?.[name] && (
        <span className="mt-1 text-xs text-error">{errors[name]?.message}</span>
      )}
      {/* {errors[name] && console.log(register(name))} */}
    </div>
  ) : (
    <>
      <input
        {...register(name, validationSchema)}
        type={type}
        id={id}
        className={`app-input ${className}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...props}
      />
      {errors?.[name] && (
        <span className="block text-xs text-error">
          {errors[name]?.message}
        </span>
      )}
    </>
  );
};

export default TextField;
