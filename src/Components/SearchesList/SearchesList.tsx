import React from "react";

import "./SearchesList.css";
import { IpLocationModel } from "../../App";
import { ModuleWrapper } from "../";

type Props = {
  searchesList: IpLocationModel[];
};

const SearchesList = ({ searchesList }: Props) => (
  <ModuleWrapper moduleTitle={"Search History"}>
    <ul>
      {searchesList.map(({ searchedItem }, index) => (
        <li key={index}>{searchedItem}</li>
      ))}
    </ul>
  </ModuleWrapper>
);

export default SearchesList;
