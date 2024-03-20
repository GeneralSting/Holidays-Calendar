import { Grid, Paper } from "@mui/material";
import { CountryCalendar } from "../../types/countryCalendarProps";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import { fetchCountryHolidays } from "../../data/countrySlice";
import Calendar from "./Calendar";
import getCurrentYear from "../../utils/getCurrentYear";

const HolidaysCalendar: FC<CountryCalendar> = ({ countryCode }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const country = useAppSelector((state) => state.country);

  useEffect(() => {
    dispatch(
      fetchCountryHolidays({ countryCode: countryCode, year: getCurrentYear() })
    );
  }, [countryCode, dispatch]);
  const currentYear = new Date().getFullYear();

  return (
    <Grid item xs>
      <Calendar year={currentYear} countryHolidays={country.holidays} />
    </Grid>
  );
};

export default HolidaysCalendar;
