import { useParams } from "react-router-dom";
import { CountryCalendar } from "../features/selectedCountry";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { fetchCountries } from "../features/countries";
import { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const CountryHolidays = () => {
  const { selectedCountryCode } = useParams();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countries.countries);

  const [registeredCountry, setRegisteredCountry] = useState<boolean>(false);

  useEffect(() => {
    // country selection is skipped
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [dispatch, countries, selectedCountryCode]);

  useEffect(() => {
    // Filter countries based on the selected country code
    const checkRegisteredCountry = countries.filter(
      (country) => country.countryCode === selectedCountryCode
    );
    setRegisteredCountry(checkRegisteredCountry.length > 0);
  }, [countries, selectedCountryCode]);

  return (
    <>
      {countries.length === 0 ? (
        <div className="centered-div">
          <CircularProgress color="primary" variant="indeterminate" />
        </div>
      ) : (
        <>
          {selectedCountryCode && registeredCountry ? (
            <CountryCalendar countryCode={selectedCountryCode} />
          ) : (
            <div className="centered-div">
              <Typography variant="h3">
                {t("main.unregisteredCountrySelect")}
              </Typography>
            </div>
          )}
        </>
      )}

      {/**
       *
       * countryInfo -> isTodayHoliday -> nextHoliday
       * ---
       * publicHolidays [
       *
       * selectYear
       * ||
       * enterYear
       * ]
       *
       * ---
       * longWeekend
       *
       */}
    </>
  );
};

export default CountryHolidays;
