import { Divider, Grid, Paper } from "@mui/material";
import { CountryCalendar } from "../../types/countryCalendarProps";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import { fetchCountryHolidays } from "../../data/countrySlice";
import { DataReadinessCheck } from "../../../../components";
import { MemoCalendarOptions } from "./CalendarOptions";
import { MemoCalendar } from "./Calendar";

const HolidaysCalendar: FC<CountryCalendar> = ({ countryCode }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const country = useAppSelector((state) => state.country);

  useEffect(() => {
    dispatch(
      fetchCountryHolidays({
        countryCode: countryCode,
        year: country.holidaysYear,
      })
    );
  }, [country.holidaysYear, countryCode, dispatch]);

  return (
    <Grid item xs>
      <DataReadinessCheck
        loading={country.holidaysLoading}
        loadingMessage={t("main.countryHoliday.loading")}
        customError={country.holidaysCustomError}
        data={country.holidays}
      >
        <Paper sx={{ pb: 2 }}>
          <MemoCalendarOptions />
          <Divider sx={{ m: 2 }}>{t("main.countryHoliday.calendar")}</Divider>
          {country.holidaysYear && (
            <MemoCalendar
              year={country.holidaysYear}
              countryHolidays={country.holidays}
            />
          )}
        </Paper>
      </DataReadinessCheck>
    </Grid>
  );
};

export default HolidaysCalendar;
