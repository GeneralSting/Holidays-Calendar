import { Grid } from "@mui/material";
import CountryInfo from "./info/CountryInfo";
import HolidaysCalendar from "./holidaysCalendar/HolidaysCalendar";

const CountryCalendar = ({ countryCode }: { countryCode: string }) => {
  return (
    <>
      <Grid
        container
        mt={4}
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
        gap={12}
      >
        <CountryInfo countryCode={countryCode} />
        <HolidaysCalendar countryCode={countryCode} />
      </Grid>
    </>
  );
};

export default CountryCalendar;
