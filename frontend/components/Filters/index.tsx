import React from "react";
import FilterSelect from "components/Filters/Select";
import FilterDoubleSelect from "components/Filters/DoubleSelect";

const FiltersComponent = () => {
  return (
    <>
      <h2 className={"text-gray-700 font-medium py-4 text-3xl"}>Filtruj</h2>
      <FilterSelect labelName={"Województwo"} />
      <FilterSelect labelName={"Miasto"} />
      <FilterSelect labelName={"Płeć"} />
      <FilterDoubleSelect />
    </>
  );
};

export default FiltersComponent;
