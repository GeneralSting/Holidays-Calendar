import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { useTranslation } from "react-i18next";
import CountriesAutoComplete from "./CountriesAutoComplete";
import { Grid, Typography } from "@mui/material";
import BtnCountrySelect from "./BtnCountrySelect";
import { useNavigate } from "react-router-dom";
import { Country, fetchCountries } from "..";
import DataReadinessCheck from "../../../components/DataReadinessCheck";

export const CountrySelect = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const countriesState = useAppSelector((state) => state.countries);
  const navigate = useNavigate();

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const navigateCountry = () => {
    navigate(`${selectedCountry?.countryCode}`);
  };

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <>
      <DataReadinessCheck
        loading={countriesState.loading}
        loadingMessage={t("main.global.dataLoading")}
        customError={countriesState.customError}
        data={countriesState.countries}
      >
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
                  countries={countriesState.countries}
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
      </DataReadinessCheck>
    </>
  );
};
