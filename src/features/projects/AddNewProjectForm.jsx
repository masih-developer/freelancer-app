import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useNewProject from "./useNewProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

const REQUIRED_FIELD_TEXT = "پر کردن این فیلد الزامیست.";

const AddNewProjectForm = ({ projectToEdit = {}, onClose }) => {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: editedTags,
  } = projectToEdit;

  let editSessionValues = {};
  if (isEditSession) {
    editSessionValues = { title, description, budget, category: category._id };
  }

  const [tags, setTags] = useState(editedTags || []);
  const [date, setDate] = useState(deadline ? new Date(deadline) : new Date());

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: editSessionValues,
  });
  const { categories, isLoadingCategories } = useCategories();
  const { createNewProject, isCreating } = useNewProject();
  const { editProject, isEditing } = useEditProject();

  const submitFormHandler = (data) => {
    const finalData = {
      ...data,
      tags,
      deadline: new Date(date).toISOString(),
    };
    if (isEditSession) {
      const editData = { id: editId, newProject: finalData };
      editProject(editData, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    } else {
      createNewProject(finalData, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
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
          loading={isLoadingCategories}
          label="دسته بندی"
          options={categories}
          required
          errors={errors}
          validationSchema={{
            required: REQUIRED_FIELD_TEXT,
          }}
        />
        <TagsInput value={tags} onChange={setTags} />
        <DatePickerField
          label="ددلاین"
          date={date}
          setDate={setDate}
          required
        />
      </div>
      {isCreating || isEditing ? (
        <div className="mt-5 text-center">
          <Loading />
        </div>
      ) : (
        <button type="submit" className="app-btn mt-5">
          تایید
        </button>
      )}
    </form>
  );
};

export default AddNewProjectForm;
