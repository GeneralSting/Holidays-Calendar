import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import NoDataMsg from "../../../components/NoDataMsg";
import LoadingMsg from "../../../components/LoadingMsg";
import ErrorMsg from "../../../components/ErrorMsg";
import { useTranslation } from "react-i18next";
import CountriesAutoComplete from "./CountriesAutoComplete";
import { Grid, Typography } from "@mui/material";
import BtnCountrySelect from "./BtnCountrySelect";
import { useNavigate } from "react-router-dom";
import { Country, fetchCountries } from "..";

export const CountrySelect = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countries.countries);
  const loading = useAppSelector((state) => state.countries.loading);
  const customError = useAppSelector((state) => state.countries.customError);
  const navigate = useNavigate();

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const navigateCountry = () => {
    console.log(selectedCountry?.countryCode);
    navigate(`${selectedCountry?.countryCode}`);
  };

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <>
      {loading && <LoadingMsg />}
      {customError && <ErrorMsg message={customError} />}
      {!loading &&
        !customError &&
        (countries.length === 0 ? (
          <NoDataMsg message={t("main.global.noCountries")} />
        ) : (
          <Grid
            sx={{ minHeight: "100%", pl: 1, pr: 1 }} // padding: xs={12} so we need little space from sides
            container
            direction="column"
            justifyContent="space-evenly"
            spacing={16}
            alignItems="center"
          >
            <Grid item>
              <Grid
                container
                direction="column"
                justifyContent="space-evenly"
                alignItems="stretch"
                gap={8}
              >
                <Grid item>
                  <Typography variant="h3" className="title-centered">
                    {t("main.countrySelect.title")}
                  </Typography>
                </Grid>
                <Grid item>
                  <CountriesAutoComplete
                    countries={countries}
                    onCountrySelect={setSelectedCountry}
                  />
                </Grid>
                <Grid item />
                <Grid item />
                <Grid item>
                  <BtnCountrySelect
                    selected={selectedCountry !== null ? true : false}
                    countryName={selectedCountry?.name}
                    btnClicked={navigateCountry}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
    </>
  );
};
