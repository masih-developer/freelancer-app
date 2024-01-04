import FilterDropdown from "../../../ui/FilterDropdown";

const ProjectHeader = () => {
  return (
    <div className="mb-5 flex items-center justify-between gap-x-5 text-secondary-700">
      <h1 className="shrink-0 text-lg font-bold">لیست پروژه ها</h1>
      <FilterDropdown
        filterField="category"
        options={[
          { label: "دسته بندی (همه)", value: "ALL" },
          {
            label: "programming",
            value: "programming",
          },
          {
            label: "فرانت اند",
            value: "frontend",
          },
          {
            label: "بک اند",
            value: "backend",
          },
          {
            label: "برنامه نویسی موبایل",
            value: "mobile programming",
          },
        ]}
      />
    </div>
  );
};

export default ProjectHeader;
