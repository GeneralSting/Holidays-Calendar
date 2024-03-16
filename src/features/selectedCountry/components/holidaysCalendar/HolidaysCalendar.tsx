import { Grid } from "@mui/material";
import { CountryCalendar } from "../../types/countryCalendarProps";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import { fetchCountryHolidays } from "../../data/countrySlice";

const HolidaysCalendar: FC<CountryCalendar> = ({ countryCode }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const country = useAppSelector((state) => state.country);

  useEffect(() => {
    dispatch(fetchCountryHolidays({ countryCode: countryCode, year: 2024 }));
  }, [countryCode, dispatch]);

  return (
    <Grid item xs sx={{ backgroundColor: "blue" }}>
      nesta
    </Grid>
  );
};

export default HolidaysCalendar;
