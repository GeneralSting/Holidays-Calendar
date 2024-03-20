import { Divider, Grid, Paper } from "@mui/material";
import { CountryCalendar } from "../../types/countryCalendarProps";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import { fetchCountryHolidays } from "../../data/countrySlice";
import Calendar from "./Calendar";
import CalendarOptions from "./CalendarOptions";
import { getCurrentYear } from "../../../../utils/getDateInfo";

const HolidaysCalendar: FC<CountryCalendar> = ({ countryCode }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const country = useAppSelector((state) => state.country);

  useEffect(() => {
    dispatch(
      fetchCountryHolidays({ countryCode: countryCode, year: getCurrentYear() })
    );
  }, [countryCode, dispatch]);

  return (
    <Grid item xs>
      <Paper sx={{pb: 2}}>
        <CalendarOptions />
        <Divider sx={{m: 2}}>{t("main.countryHoliday.calendar")}</Divider>
        {country.holidaysYear && (
          <Calendar
            year={country.holidaysYear}
            countryHolidays={country.holidays}
          />
        )}
      </Paper>
    </Grid>
  );
};

export default HolidaysCalendar;
