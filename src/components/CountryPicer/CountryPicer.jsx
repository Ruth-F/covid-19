import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";

import { fetchCountries } from "../../api";

const CountryPicer = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setCountries(await fetchCountries());
    };
    fetchApi();
  }, [setCountries]);

  return (
    <FormControl>
      <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicer;
