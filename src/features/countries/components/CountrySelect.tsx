import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { fetchCountries } from "../data/countriesSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import NoDataMsg from "../../../components/NoDataMsg";
import LoadingMsg from "../../../components/LoadingMsg";
import ErrorMsg from "../../../components/ErrorMsg";

export function CountrySelect() {
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countries.countries);
  const loading = useAppSelector((state) => state.countries.loading);
  const customError = useAppSelector((state) => state.countries.customError);

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
          <NoDataMsg message="At the moments there are no available countries to select" />
        ) : (
          <Autocomplete
            id="country-search-select"
            sx={{ width: 300 }}
            options={countries}
            autoHighlight
            getOptionLabel={(country) => country.name}
            renderOption={(props, country) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${country.countryCode.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${country.countryCode.toLowerCase()}.png`}
                  alt=""
                />
                {country.name} ({country.countryCode})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a country"
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />
        ))}
    </>
  );
}
