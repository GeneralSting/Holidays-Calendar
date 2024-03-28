import { FC, useEffect, useState } from "react";
import { CalendarProps } from "../../types/calendarProps";
import { useAppSelector } from "../../../../hooks/storeHooks";
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
import generateMonthDays from "../../utils/generateMonthDays";
import extractHolidayMonths from "../../utils/extractHolidaysMonth";
import React from "react";
import { HolidayMonth } from "../../types/holidayMonth";
import { formatDateApi, getLocalWeekdays } from "../../../../utils";
import HolidayDialog from "./HolidayDialog";
import extractLongWeekends from "../../utils/extractLongWeekends";
import { longWeekendMonth } from "../../types/longWeekendMonth";
import CalendarTableBody from "./CalendarTableBody";

const Calendar: FC<CalendarProps> = ({ year, countryHolidays }) => {
  const showLongWeekends = useAppSelector(
    (state) => state.country.checkedLongWeekends
  );
  const longWeekends = useAppSelector((state) => state.country.longWeekend);
  const currentLanguage = useAppSelector((state) => state.options.language);
  const [holidayMonths, setHolidayMonths] = useState<HolidayMonth[]>([]);
  const [holidayDialog, setHolidayDialog] = useState<boolean>(false);
  const [holidayDate, setHolidayDate] = useState<string | null>(null);
  const [longWeekendMonths, setLongWeekendMonths] = useState<
    longWeekendMonth[]
  >([]);

  const handleHolidayDate = (month: number, day: number) => {
    setHolidayDialog(true);
    setHolidayDate(formatDateApi(new Date(year, month, day)));
  };

  useEffect(() => {
    const value = extractHolidayMonths(countryHolidays);
    setHolidayMonths(value);
    if (showLongWeekends) {
      setLongWeekendMonths(extractLongWeekends(longWeekends, year));
    } else {
      setLongWeekendMonths([]);
    }
  }, [countryHolidays, longWeekends, showLongWeekends, year]);

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
                  {/**
                   * creating new component just to make this component more readable
                   */}
                  <CalendarTableBody
                    year={year}
                    month={month}
                    holidayMonths={holidayMonths}
                    longWeekendMonths={longWeekendMonths}
                    showLongWeekends={showLongWeekends}
                    generateMonthDays={generateMonthDays}
                    handleHolidayDate={handleHolidayDate}
                  />
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <Grid container direction="row">
        {months}
      </Grid>
      <HolidayDialog
        dialogOpen={holidayDialog}
        holidayDate={holidayDate}
        closeDialog={() => setHolidayDialog(false)}
      />
    </>
  );
};

export default Calendar;
