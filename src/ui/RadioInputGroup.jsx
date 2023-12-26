import RadioInput from "./RadioInput";

const RadioInputGroup = ({ register, watch, errors, configs }) => {
  const { name, validationSchema = {}, options } = configs;

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-5">
        {options.map((option) => (
          <RadioInput
            key={option.value}
            label={option.label}
            value={option.value}
            name={name}
            id={option.value}
            className="form-radio h-4 w-4 cursor-pointer text-primary-900 focus:ring-primary-900"
            register={register}
            checked={watch(name) === option.value}
            validationSchema={validationSchema}
          />
        ))}
      </div>
      {errors?.[name] && (
        <p className="mt-1 text-center text-xs text-error">
          {errors?.[name].message}
        </p>
      )}
    </div>
  );
};

export default RadioInputGroup;
