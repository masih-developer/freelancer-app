import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";

const REQUIRED_FIELD_TEXT = "پر کردن این فیلد الزامیست.";

const AddNewProjectForm = () => {
  const [tage, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { categories } = useCategories();

  const submitFormHandler = (data) => {
    console.log(data);
  };

  return (
    <form className="sm:w-[500px]" onSubmit={handleSubmit(submitFormHandler)}>
      <div className="flex flex-col gap-y-3">
        <TextField
          label="عنوان پروژه"
          name="title"
          register={register}
          required
          validationSchema={{
            required: REQUIRED_FIELD_TEXT,
            minLength: {
              value: 5,
              message: "عنوان پروژه می بایست حداقل 5 کاراکتر باشد.",
            },
          }}
          errors={errors}
        />
        <TextField
          label="توضیحات"
          name="description"
          type="textarea"
          minHeight={100}
          register={register}
          required
          validationSchema={{
            required: REQUIRED_FIELD_TEXT,
            minLength: {
              value: 10,
              message: "توضیحات پروژه می بایست حداقل 10 کاراکتر باشد.",
            },
          }}
          errors={errors}
        />
        <TextField
          label="قیمت(تومان)"
          name="budget"
          register={register}
          required
          validationSchema={{
            required: REQUIRED_FIELD_TEXT,
            pattern: {
              value: /^[1-9]\d{4,9}?$/i,
              message: "قیمت پروژه می بایست حداقل 10,000 تومان باشد.",
            },
          }}
          errors={errors}
        />
        <RHFSelect
          register={register}
          name="category"
          label="دسته بندی"
          options={categories}
          required
          errors={errors}
          validationSchema={{
            required: REQUIRED_FIELD_TEXT,
          }}
        />
        <TagsInput
          value={tage}
          onChange={setTags}
          name="tags"
          classNames={{}}
        />
        <DatePickerField
          label="ددلاین"
          date={date}
          setDate={setDate}
          required
        />
      </div>
      <button type="submit" className="app-btn mt-5">
        تایید
      </button>
    </form>
  );
};

export default AddNewProjectForm;
