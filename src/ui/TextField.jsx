import { useEffect, useRef, useState } from "react";

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
  const textareaRef = useRef(null);
  const [textareaVal, setTextareaVal] = useState("");

  useEffect(() => {
    if (textareaRef?.current) {
      const textAreaElem = textareaRef.current.children[1];
      textAreaElem.style.height = "0px";
      textAreaElem.style.height = textAreaElem.scrollHeight + 2 + "px";
    }
  }, [textareaVal]);

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
    <div className="flex flex-col" ref={textareaRef}>
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
        onChange={(e) => {
          register(name, validationSchema).onChange(e);
          setTextareaVal(e.target.value);
        }}
        id={id}
        className={`app-input min-h-[41.6px]`}
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
