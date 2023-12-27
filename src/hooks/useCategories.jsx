import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/CategoryService";

const useCategories = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { categories, transformedCategories, ...rest };
};

export default useCategories;
