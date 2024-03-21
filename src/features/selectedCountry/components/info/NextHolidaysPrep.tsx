import { CountryHoliday } from "../../types/countryHoliday";
import { useEffect, useState } from "react";
import HolidayHorizontalTabs from "./HolidayHorizontalTabs";
import { CircularProgress } from "@mui/material";
import { getCurrentDate } from "../../../../utils";

const NextHolidaysPrep = ({
  nextHolidays,
}: {
  nextHolidays: CountryHoliday[];
}) => {
  const currentDate = getCurrentDate();
  const [nextThreeHolidays, setNextThreeHolidays] = useState<CountryHoliday[]>(
    []
  );
  const [todayHolidays, setTodayHolidays] = useState<CountryHoliday[]>([]);

  useEffect(() => {
    const upcomingHolidays: CountryHoliday[] = [];
    const todayCountryHolidays: CountryHoliday[] = [];
    for (let counter = 0; counter < nextHolidays.length; counter++) {
      if (currentDate !== nextHolidays[counter].date) {
        if (upcomingHolidays.length < 3) {
          upcomingHolidays.push(nextHolidays[counter]);
        } else {
          setTodayHolidays(todayCountryHolidays);
          setNextThreeHolidays(upcomingHolidays);
          break;
        }
      } else {
        todayCountryHolidays.push(nextHolidays[counter]);
      }
    }
  }, [currentDate, nextHolidays]);

  return (
    <>
      {nextThreeHolidays.length !== 0 ? (
        <HolidayHorizontalTabs
          todayHolidays={todayHolidays}
          nextHolidays={nextThreeHolidays}
        />
      ) : (
        <div className="centered-div">
          <CircularProgress color="primary" variant="indeterminate" />
        </div>
      )}
    </>
  );
};

export default NextHolidaysPrep;
