import useCategories from "../../../hooks/useCategories";
import FilterDropdown from "../../../ui/FilterDropdown";

const SORT_OPTIONS = [
  { label: "مرتب سازی (جدید ترین)", value: "latest" },
  { label: "مرتب سازی (قدیمی ترین)", value: "earliest" },
];

const STATUS_OPTIONS = [
  { label: "باز", value: "OPEN" },
  { label: "بسته", value: "CLOSED" },
];

const ProjectHeader = () => {
  const { transformedCategories, isLoadingCategories } = useCategories();

  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-x-5 gap-y-2 text-right text-secondary-700">
      <h1 className="shrink-0 text-lg font-bold">لیست پروژه ها</h1>
      <div className="flex flex-wrap items-start gap-x-5 gap-y-2">
        <FilterDropdown
          filterField="status"
          options={[{ label: "وضعیت (همه)", value: "ALL" }, ...STATUS_OPTIONS]}
          width={150}
        />
        <FilterDropdown
          filterField="sort"
          options={[
            { label: "مرتب سازی (همه)", value: "ALL" },
            ...SORT_OPTIONS,
          ]}
        />
        <FilterDropdown
          filterField="category"
          options={[
            { label: "دسته بندی (همه)", value: "ALL" },
            ...transformedCategories,
          ]}
          loading={isLoadingCategories}
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
