import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SelectBox from "./SelectBox";

const findLabel = (array, value) => array.find((item) => item.value === value);

const FilterDropdown = ({ options, filterField }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get(filterField) || "";
  const [selectedTitle, setSelectedTitle] = useState(
    findLabel(options, category) || options[0],
  );

  const changeSelectHandler = (e) => {
    const selectedValue = e.value;
    setSelectedTitle(e);

    if (selectedValue === options[0].value) {
      searchParams.delete(filterField);
    } else {
      searchParams.set(filterField, selectedValue);
    }

    setSearchParams(searchParams);
  };

  useEffect(() => {
    setSelectedTitle(findLabel(options, category) || options[0]);
  }, [category, options]);

  return (
    <SelectBox
      options={options}
      onChange={changeSelectHandler}
      selected={selectedTitle}
    />
  );
};

export default FilterDropdown;
