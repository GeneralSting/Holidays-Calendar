import { useParams } from "react-router-dom";
import { CountryInfo } from "../features/selectedCountry";

const CountryHolidays = () => {
  const { country } = useParams();
  console.log(country);

  return (
    <>
      <CountryInfo />
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
