import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import getCalendarYears from "../../utils/getCalendarYears";
import { getCurrentYear } from "../../../../utils/getDateInfo";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import {
  fetchCountryHolidays,
  updateHolidaysYear,
} from "../../data/countrySlice";

const SelectYear = () => {
  const country = useAppSelector((state) => state.country);
  const dispatch = useAppDispatch();

  const [year, setYear] = useState<string>(getCurrentYear().toString());

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
    country.countryCode &&
      dispatch(
        fetchCountryHolidays({
          countryCode: country.countryCode,
          year: parseInt(event.target.value),
        })
      );
    dispatch(updateHolidaysYear(parseInt(event.target.value)));
  };
  return (
    <FormControl>
      <InputLabel id="select-year">Year</InputLabel>
      <Select
        size="medium"
        labelId="select-year"
        id="demo-simple-select"
        value={year}
        label="Year"
        onChange={handleChange}
        MenuProps={{
          disableScrollLock: true,
        }}
      >
        {getCalendarYears().map((year, index) => (
          <MenuItem key={index} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectYear;
