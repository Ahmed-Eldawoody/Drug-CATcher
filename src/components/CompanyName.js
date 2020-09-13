// Dependencies
import React, { useContext } from "react";
import CreatableSelect from "react-select/creatable";
//
//
//
//
//
import { Companies } from "../Data";
import { Context } from "../Context";
//
//
//
//
//
// CompanyName Component
export default function CompanyName() {
  //
  const { setCompanyName, operationCountries } = useContext(Context);
  //
  function Select() {
    // if you add one country then remove it the operationCountries value will be null
    if (operationCountries === null || operationCountries.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  //
  //
  //
  //
  // Custom theme for the multiSelect
  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        // primary25: "blue",
        primary: "blue"
      }
    };
  }
  //
  //
  //
  // JSX
  return (
    <div>
      <CreatableSelect
        onChange={setCompanyName}
        isSearchable
        isDisabled={Select()}
        placeholder="Company Name"
        options={Companies}
        theme={customTheme}
      />
    </div>
  );
}
