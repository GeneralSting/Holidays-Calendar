import { useParams } from "react-router-dom";

const CountryHolidays = () => {
  const { country } = useParams();
  console.log(country);

  return <>{country ? <h1>country: {country}</h1> : <>nope</>}</>;
};

export default CountryHolidays;
