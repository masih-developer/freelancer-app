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
  height,
  errors,
  ...props
}) => {
  return type === "text" ? (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 flex items-center gap-1 text-sm text-secondary-700"
        >
          {label}
          {required && <span className="text-error">*</span>}
        </label>
      )}
      <input
        {...register(name, validationSchema)}
        type={type}
        id={id}
        className={`app-input${className ? " " + className : ""}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...props}
      />
      {errors?.[name] && (
        <span className="mt-1 text-xs text-error">{errors[name]?.message}</span>
      )}
    </div>
  ) : (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 flex items-center gap-1 text-sm text-secondary-700"
        >
          {label}
          {required && <span className="text-error">*</span>}
        </label>
      )}
      <textarea
        {...register(name, validationSchema)}
        id={id}
        className={`app-input min-h-[41.6px]`}
        style={{ height: height ? height + "px" : "41.6px" }}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...props}
      />
      {errors?.[name] && (
        <span className="mt-1 text-xs text-error">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default TextField;
