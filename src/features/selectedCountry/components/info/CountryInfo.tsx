import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import {
  fetchCountryHolidays,
  fetchCountryInfo,
} from "../../data/countrySlice";
import { Grid, Paper } from "@mui/material";
import LoadingMsg from "../../../../components/LoadingMsg";
import ErrorMsg from "../../../../components/ErrorMsg";
import NoDataMsg from "../../../../components/NoDataMsg";
import isObjectEmpty from "../../../../utils/isObjectEmpty";
import { useTranslation } from "react-i18next";
import InfoGrid from "./InfoGrid";
import IsTodayHoliday from "./IsTodayHoliday";
import NextHolidayGrid from "./NextHolidayGrid";

const CountryInfo = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const country = useAppSelector((state) => state.country);

  useEffect(() => {
    dispatch(fetchCountryInfo("hr"));
    dispatch(fetchCountryHolidays({ countryCode: "hr", year: 2024 }));
  }, [dispatch]);

  return (
    <Grid
      container
      mt={4}
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      gap={12}
    >
      <Grid item>
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
                  <NextHolidayGrid nextHolidays={country.nextHolidays} />
                </Paper>
              </Grid>
              <Grid item xs={10}>
                <Paper elevation={4} square={false}>
                  <IsTodayHoliday nextHolidays={country.nextHolidays} />
                </Paper>{" "}
              </Grid>
            </Grid>
          ))}
      </Grid>

      <Grid item xs sx={{ backgroundColor: "blue" }}>
        nesta
      </Grid>
    </Grid>
  );
};

export default CountryInfo;
