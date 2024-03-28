import { Button, TableCell, TableRow, Tooltip } from "@mui/material";
import { FC } from "react";
import { CalendarTableBodyProps } from "../../types/calendarTableBodyProps";
import { useTranslation } from "react-i18next";

const CalendarTableBody: FC<CalendarTableBodyProps> = ({
  year,
  month,
  holidayMonths,
  longWeekendMonths,
  showLongWeekends,
  generateMonthDays,
  handleHolidayDate,
}) => {
  const { t } = useTranslation();

  return (
    <>
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

            let isBridgeDay;
            if (!isButtonDay) {
              isBridgeDay = longWeekendMonths.some(
                (weekendMonth) =>
                  weekendMonth.month === month + 1 &&
                  weekendMonth.weekends.some(
                    (weekend) =>
                      weekend.day === day && weekend.isWeekend === false
                  )
              );
            }

            return (
              <TableCell key={dayIndex} align="center" sx={{ padding: 1 }}>
                {isButtonDay ? (
                  <Button
                    variant="contained"
                    sx={{ padding: 0, minWidth: "100%" }}
                    onClick={() => handleHolidayDate(month, day)}
                  >
                    {day}
                  </Button>
                ) : (
                  <>
                    {showLongWeekends &&
                    longWeekendMonths.some(
                      (weekendMonth) =>
                        weekendMonth.month === month + 1 &&
                        weekendMonth.weekends.some(
                          (weekend) => weekend.day === day
                        )
                    ) ? (
                      <Tooltip
                        title={
                          isBridgeDay
                            ? t("main.countryWeekends.bridgeDay")
                            : t("main.countryWeekends.nonBridgeDay")
                        }
                        placement="top"
                      >
                        <Button
                          variant="outlined"
                          color={isBridgeDay ? "warning" : "primary"}
                          sx={{ padding: 0, minWidth: "100%" }}
                        >
                          {day}
                        </Button>
                      </Tooltip>
                    ) : (
                      <>{day > 0 ? day : ""}</>
                    )}
                  </>
                )}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </>
  );
};

export default CalendarTableBody;
