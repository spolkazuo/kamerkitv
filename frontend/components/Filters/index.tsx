import React, { useEffect, useState } from "react";
import FilterSelect from "components/Filters/Select";
import FilterDoubleSelect from "components/Filters/DoubleSelect";

let ageArr: { id: number; name: string }[] = [];
const age = () => {
  [...Array(100)].map((e, i) => {
    ageArr.push({ id: i, name: i.toString() });
  });
  ageArr = ageArr.filter((i) => i.id > 17);
};
let heightArr: { id: number; name: string }[] = [];
const height = () => {
  [...Array(200)].map((e, i) => {
    heightArr.push({ id: i, name: i.toString() + " cm" });
  });
  heightArr = heightArr.filter((i) => i.id > 100);
};

const FiltersComponent = () => {
  age();
  height();
  return (
    <>
      <h2 className={"text-gray-700 font-medium py-4 text-3xl"}>Filtruj</h2>
      <FilterSelect labelName={"Województwo"} />
      <FilterSelect labelName={"Miasto"} />
      <FilterSelect labelName={"Płeć"} />
      <FilterDoubleSelect labelName={"Wiek"} selectOptions={ageArr} />
      <FilterDoubleSelect labelName={"Wzrost"} selectOptions={heightArr} />
    </>
  );
};

export default FiltersComponent;
