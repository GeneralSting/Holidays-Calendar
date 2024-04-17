import { useParams } from "react-router-dom";
import {
  CountryCalendar,
  updateCountryCode,
  updateHolidaysYear,
} from "../features/selectedCountry";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { fetchCountries } from "../features/countries";
import { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { getCurrentYear } from "../utils";
import { Helmet } from "react-helmet-async";

const CountryHolidays = () => {
  const { selectedCountryCode } = useParams();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countries.countries);

  const [registeredCountry, setRegisteredCountry] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    // country selection is skipped
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [dispatch, countries, selectedCountryCode]);

  useEffect(() => {
    // Filter countries based on the selected country code
    if (countries.length > 0) {
      const checkRegisteredCountry = countries.filter(
        (country) => country.countryCode === selectedCountryCode
      );
      if (checkRegisteredCountry.length > 0) {
        dispatch(updateCountryCode(selectedCountryCode));
        dispatch(updateHolidaysYear(getCurrentYear()));
      }
      setRegisteredCountry(checkRegisteredCountry.length > 0);
    }
  }, [countries, dispatch, selectedCountryCode]);

  return (
    <>
      <Helmet>
        <title>{selectedCountryCode} Holidays</title>
        <meta
          name="description"
          content="Displaying informations, holidays and long weekends for selected country"
        />
        <meta
          name="keywords"
          content="country, holidays, long weeknds, long weekends for country, holidays for country"
        />
        <link rel="canonical" href={`/${selectedCountryCode}`} />
      </Helmet>
      {countries.length === 0 ? (
        <div className="centered-div">
          <CircularProgress color="primary" variant="indeterminate" />
        </div>
      ) : (
        <>
          {selectedCountryCode && registeredCountry !== null ? (
            registeredCountry ? (
              <CountryCalendar countryCode={selectedCountryCode} />
            ) : (
              <div className="centered-div">
                <Typography variant="h3">
                  {t("main.unregisteredCountrySelect")}
                </Typography>
              </div>
            )
          ) : null}
        </>
      )}
    </>
  );
};

export default CountryHolidays;
