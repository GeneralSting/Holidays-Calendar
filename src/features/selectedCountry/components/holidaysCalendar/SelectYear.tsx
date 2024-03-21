import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import getCalendarYears from "../../utils/getCalendarYears";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import {
  fetchCountryHolidays,
  updateHolidaysYear,
} from "../../data/countrySlice";

const SelectYear = () => {
  const country = useAppSelector((state) => state.country);
  const dispatch = useAppDispatch();

  const [year, setYear] = useState<number>(country.holidaysYear);

  const handleChange = (event: SelectChangeEvent) => {
    if (year.toString() !== event.target.value) {
      setYear(parseInt(event.target.value));
      country.countryCode &&
        dispatch(
          fetchCountryHolidays({
            countryCode: country.countryCode,
            year: parseInt(event.target.value),
          })
        );
      dispatch(updateHolidaysYear(parseInt(event.target.value)));
    }
  };
  return (
    <FormControl>
      <InputLabel id="select-year">Year</InputLabel>
      <Select
        size="medium"
        labelId="select-year"
        id="demo-simple-select"
        value={year.toString()}
        label="Year"
        onChange={handleChange}
        MenuProps={{
          disableScrollLock: true,
        }}
      >
        {getCalendarYears().map((year, index) => (
          <MenuItem key={index} value={year.toString()}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectYear;
