import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { fetchCountryHolidays, fetchCountryInfo } from "../data/countrySlice";

const CountryInfo = () => {
  const dispatch = useAppDispatch();
  const country = useAppSelector((state) => state.country);

  useEffect(() => {
    dispatch(fetchCountryInfo("hr"));
    dispatch(fetchCountryHolidays({countryCode: "hr", year: 2024}))
  }, [dispatch]);

  return (
    <h1>{country.countryInfo.commonName}</h1>
  )
}

export default CountryInfo;