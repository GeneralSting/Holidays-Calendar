import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { fetchCountries } from "../countriesSlice";
import { Country } from "../../../types/country";

export function Countries() {
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countries.countries);
  const loading = useAppSelector((state) => state.countries.loading);
  const customError = useAppSelector((state) => state.countries.customError);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <>
      <div>
        {loading && <p>Loading...</p>}
        {customError && <p>{customError}</p>}
        {!loading && !customError && (
          <ul>
            {countries?.map((country: Country) => (
              <li key={country.countryCode}>{country.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
