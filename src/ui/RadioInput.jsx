const RadioInput = ({ label, value, onChange, name, id, ...props }) => {
    return (
        <div className="flex items-center gap-x-2 text-secondary-600">
            <input
                type="radio"
                name={name}
                id={id}
                className="cursor-pointer w-4 h-4 text-primary-900 focus:ring-primary-900 form-radio"
                value={value}
                onChange={onChange}
                {...props}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default RadioInput;
