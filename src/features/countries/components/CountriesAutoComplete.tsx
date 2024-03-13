import { Autocomplete, Box, TextField } from "@mui/material";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { useTranslation } from "react-i18next";
import { CountrySelectProps } from "../types/countrySelectProps";
import { FC } from "react";
import { Country } from "..";

const CountriesAutoComplete: FC<CountrySelectProps> = ({
  countries,
  onCountrySelect,
}) => {
  const { t } = useTranslation();

  const handleChange = (
    _event: React.ChangeEvent<unknown>,
    country: Country | null
  ): void => {
    if (onCountrySelect) {
      onCountrySelect(country);
    }
  };

  return (
    <Autocomplete
      sx={{
        "& .css-1q60rmi-MuiAutocomplete-endAdornment": {
          top: "unset",
        },
      }}
      popupIcon={<ArrowDropDownCircleIcon fontSize="large" />}
      noOptionsText={t("main.countrySelect.noOptions")}
      id="country-search-select"
      options={countries}
      getOptionLabel={(country) => country.name}
      onChange={handleChange}
      renderOption={(props, country) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="48"
            height="36"
            src={`https://flagcdn.com/48x36/${country.countryCode.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/96x72/${country.countryCode.toLowerCase()}.png 2x, https://flagcdn.com/144x108/${country.countryCode.toLowerCase()}.png 3x`}
            alt={country.name}
          />
          {country.name} ({country.countryCode})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t("main.countrySelect.selectLabel")}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
};

export default CountriesAutoComplete;
