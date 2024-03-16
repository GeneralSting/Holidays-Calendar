import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import { fetchCountryInfo } from "../../data/countrySlice";
import { Grid, Paper } from "@mui/material";
import LoadingMsg from "../../../../components/LoadingMsg";
import ErrorMsg from "../../../../components/ErrorMsg";
import NoDataMsg from "../../../../components/NoDataMsg";
import isObjectEmpty from "../../../../utils/isObjectEmpty";
import { useTranslation } from "react-i18next";
import InfoGrid from "./InfoGrid";
import { CountryCalendar } from "../../types/countryCalendarProps";
import NextHolidaysPrep from "./NextHolidaysPrep";

const CountryInfo: FC<CountryCalendar> = ({ countryCode }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const country = useAppSelector((state) => state.country);

  useEffect(() => {
    dispatch(fetchCountryInfo(countryCode));
  }, [countryCode, dispatch]);

  return (
    <Grid item sx={{ ml: 1, mr: 1 }}>
      {country.infoLoading && <LoadingMsg message={"Country info"} />}
      {country.infoCustomError && (
        <ErrorMsg message={country.infoCustomError} />
      )}
      {!country.infoLoading &&
        !country.infoCustomError &&
        (isObjectEmpty(country.countryInfo) ? (
          <NoDataMsg message={t("main.global.noInfoData")} />
        ) : (
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center" // Stretch items vertically
            gap={4}
          >
            <Grid item xs={12} md={8} lg={4}>
              <Paper
                elevation={4}
                square={false}
                sx={{ padding: "1rem", height: "100%" }}
              >
                <InfoGrid countryInfo={country.countryInfo} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={10} lg={6}>
              <Paper
                elevation={4}
                square={false}
                sx={{ padding: "1rem", height: "100%" }}
              >
                <NextHolidaysPrep nextHolidays={country.nextHolidays} />
              </Paper>
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
};

export default CountryInfo;
