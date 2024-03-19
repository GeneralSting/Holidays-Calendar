import { FC } from "react";
import { CalendarProps } from "../../types/calendarProps";
import { useAppSelector } from "../../../../hooks/storeHooks";
import getLocalWeekday from "../../../../utils/getLocalWeekdays";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Calendar: FC<CalendarProps> = ({ year }) => {
  const currentLanguage = useAppSelector((state) => state.options.language);

  const months: JSX.Element[] = [];
  for (let month = 0; month < 12; month++) {
    months.push(
      <Grid key={month} item xs={12} md={6} xl={4}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <h2>
              {new Date(year, month).toLocaleString(currentLanguage, {
                month: "long",
              })}
            </h2>
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table size="small"
                aria-label={`table ${new Date(year, month).toLocaleDateString(
                  currentLanguage,
                  {
                    month: "long",
                    year: "numeric",
                  }
                )}`}
              >
                <caption>proba</caption>
                
                <TableHead>
                  <TableRow>
                    {getLocalWeekday().map((day, index) => (
                      <TableCell key={index} align="center">
                        {day}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {generateMonthDays(year, month).map((week, weekIndex) => (
                    <TableRow key={weekIndex}>
                      {week.map((day, dayIndex) => (
                        <TableCell key={dayIndex} align="center">
                          {day > 0 ? day : ""}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container direction="row">
      {months}
    </Grid>
  );
};

const generateMonthDays = (year: number, month: number): number[][] => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: (firstDayOfMonth + 6) % 7 }, () => 0);

  const allDays = [...blanks, ...days];

  const weeks: number[][] = [];
  for (let i = 0; i < allDays.length; i += 7) {
    weeks.push(allDays.slice(i, i + 7));
  }

  return weeks;
};
export default Calendar;
