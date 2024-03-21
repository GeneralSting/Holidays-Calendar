import { FC, useEffect, useState } from "react";
import { CalendarProps } from "../../types/calendarProps";
import { useAppSelector } from "../../../../hooks/storeHooks";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import generateMonthDays from "../../utils/generateMonthDays";
import extractHolidayMonths from "../../utils/extractHolidaysMonth";
import React from "react";
import { HolidayMonth } from "../../types/holidayMonth";
import { getLocalWeekdays } from "../../../../utils";

const Calendar: FC<CalendarProps> = ({ year, countryHolidays }) => {
  const currentLanguage = useAppSelector((state) => state.options.language);
  const [holidayMonths, setHolidayMonths] = useState<HolidayMonth[]>([]);

  useEffect(() => {
    setHolidayMonths(extractHolidayMonths(countryHolidays));
  }, [countryHolidays, year]);

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
            <TableContainer component={Paper} elevation={4}>
              <Table
                size="small"
                aria-label={`table ${new Date(year, month).toLocaleDateString(
                  currentLanguage,
                  {
                    month: "long",
                    year: "numeric",
                  }
                )}`}
              >
                {holidayMonths.some(
                  (holidayMonth) => holidayMonth.month === month + 1
                ) ? (
                  <caption>
                    {holidayMonths
                      .filter(
                        (holidayMonth) => holidayMonth.month === month + 1
                      )
                      .map((holidayMonth) =>
                        holidayMonth.holidays.map((holiday, index) => (
                          <React.Fragment key={index}>
                            <span>
                              {holiday.name} - {holiday.day}
                            </span>
                            <br />
                          </React.Fragment>
                        ))
                      )}
                  </caption>
                ) : (
                  <></>
                )}

                <TableHead>
                  <TableRow>
                    {getLocalWeekdays().map((day, index) => (
                      <TableCell key={index} align="center">
                        {day}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {generateMonthDays(year, month).map((week, weekIndex) => (
                    <TableRow key={weekIndex}>
                      {week.map((day, dayIndex) => {
                        const isButtonDay = holidayMonths.some(
                          (holidayMonth) =>
                            holidayMonth.month === month + 1 &&
                            holidayMonth.holidays.some(
                              (holidayDay) => holidayDay.day === day
                            )
                        );
                        return (
                          <TableCell
                            key={dayIndex}
                            align="center"
                            sx={{ padding: 1 }}
                          >
                            {isButtonDay ? (
                              <Button
                                variant="contained"
                                sx={{ padding: 0, minWidth: "100%" }}
                              >
                                {day}
                              </Button>
                            ) : (
                              <>{day > 0 ? day : ""}</>
                            )}
                          </TableCell>
                        );
                      })}
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

export default Calendar;
