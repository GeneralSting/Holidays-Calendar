import { Grid } from "@mui/material";
import SelectYear from "./SelectYear";
import CaledarSwitch from "./CalendarSwitch";
import CalendarQuestion from "./CalendarQuestion";

const CalendarOptions = () => {
  return (
    <Grid container alignItems="center" gap={2} paddingTop={1}>
      <Grid item xs display="flex" alignItems="center" justifyContent="center">
        {" "}
        <SelectYear />
      </Grid>
      <Grid item xs display="flex" alignItems="center" justifyContent="center">
        <CaledarSwitch />
      </Grid>
      <Grid item xs display="flex" alignItems="center" justifyContent="center">
        <CalendarQuestion />
      </Grid>
    </Grid>
  );
};

export default CalendarOptions;
