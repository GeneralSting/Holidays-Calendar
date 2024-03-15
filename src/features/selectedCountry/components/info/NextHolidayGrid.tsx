import { CountryHoliday } from "../../types/countryHoliday";
import { getCurrentDate } from "../../../../utils/getDateInfo";
import { useEffect, useState } from "react";
import VerticalTabs from "./VerticalTabs";

const NextHolidayGrid = ({
  nextHolidays,
}: {
  nextHolidays: CountryHoliday[];
}) => {
  const currentDate = getCurrentDate();
  const [nextDateHolidays, setNextDateHolidays] = useState<CountryHoliday[]>();

  useEffect(() => {
    for (let counter = 0; counter < nextHolidays.length; counter++) {
      if (currentDate !== nextHolidays[counter].date) {
        const nextDates = nextHolidays.filter(
          (holiday) => holiday.date === nextHolidays[counter].date
        );
        setNextDateHolidays(nextDates);
        break;
      }
    }
  }, [currentDate, nextHolidays]);

  return (
    <>
      {nextDateHolidays && <VerticalTabs holidays={nextDateHolidays} />}
      {/* {nextDateHolidays && (
        <Grid container spacing={2} sx={{ textAlign: "start" }}>
          <Grid item xs={6}>
            <Typography variant="body1">
              {t("main.countryHoliday.name")}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">{nextDateHolidays[0].name}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1">
              {t("main.countryHoliday.localeName")}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              {nextDateHolidays[0].localName}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1">
              {t("main.countryHoliday.date")}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">{nextDateHolidays[0].date}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1">
              {t("main.countryHoliday.fixed")}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            {nextDateHolidays[0].fixed ? (
              <Typography variant="body1">
                {t("main.global.answerYes")}
              </Typography>
            ) : (
              <Typography variant="body1">
                {t("main.global.answerNo")}
              </Typography>
            )}
          </Grid>
        </Grid>
      )} */}
    </>
  );
};

export default NextHolidayGrid;
