const TextField = ({
    label,
    value,
    onChange,
    type = "text",
    id,
    name,
    className,
    placeholder,
    autoComplete = "off",
    ...props
}) => {
    return label ? (
        <div className="flex flex-col">
            <label htmlFor={id} className="mb-2 text-secondary-700">
                {label}
            </label>
            <input
                value={value}
                onChange={onChange}
                type={type}
                id={id}
                name={name}
                className={`app-input ${className}`}
                placeholder={placeholder}
                autoComplete={autoComplete}
                {...props}
            />
        </div>
    ) : (
        <input
            value={value}
            onChange={onChange}
            type={type}
            id={id}
            name={name}
            className={`app-input ${className}`}
            placeholder={placeholder}
            autoComplete={autoComplete}
            {...props}
        />
    );
};

export default TextField;
