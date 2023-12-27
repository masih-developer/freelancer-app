import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DatePickerField = ({ label, date, setDate, required }) => {
  return (
    <div className="flex flex-col">
      <span className="mb-2 flex items-center gap-1 text-sm text-secondary-700">
        {label}
        {required && <span className="text-error">*</span>}
      </span>
      <DatePicker
        className="w-full"
        inputClass="app-input"
        calendarPosition="bottom-center"
        value={date}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
};

export default DatePickerField;
