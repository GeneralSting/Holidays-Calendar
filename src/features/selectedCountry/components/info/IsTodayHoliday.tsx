import { Typography } from "@mui/material";
import { getCurrentDate } from "../../../../utils/getDateInfo";
import { CountryHoliday } from "../../types/countryHoliday";
import { useTranslation } from "react-i18next";

const IsTodayHoliday = ({
  nextHolidays,
}: {
  nextHolidays: CountryHoliday[];
}) => {
  const { t } = useTranslation();
  const currentDate = getCurrentDate(); // Get fresh current date every time component renders

  const todayHolidays = nextHolidays.filter(
    (holiday) => holiday.date === currentDate
  );

  return (
    <>
      {todayHolidays.length === 0 ? (
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {t("main.countryInfo.todayNotHoliday")}
        </Typography>
      ) : (
        todayHolidays.map((holiday, index) => (
          <Typography key={index} variant="h5" sx={{ textAlign: "center" }}>
            {t("main.countryInfo.todayHoliday")} {holiday.name}
          </Typography>
        ))
      )}
    </>
  );
};

export default IsTodayHoliday;
