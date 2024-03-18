import { Grid } from "@mui/material";
import { CountryCalendar } from "../../types/countryCalendarProps";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import { fetchCountryHolidays } from "../../data/countrySlice";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const HolidaysCalendar: FC<CountryCalendar> = ({ countryCode }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const country = useAppSelector((state) => state.country);

  useEffect(() => {
    dispatch(fetchCountryHolidays({ countryCode: countryCode, year: 2024 }));
  }, [countryCode, dispatch]);

  return (
    <Grid item xs>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>{" "}
    </Grid>
  );
};

export default HolidaysCalendar;
