import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../../hooks/storeHooks";
import { InfoNextHolidays } from "../../types/infoNextHolidays";
import NoTodayTabPanel from "./NoTodayTabPanel";
import HolidayTabPanel from "./HolidayTabPanel";
import { formatDateLocal } from "../../../../utils";

const a11yProps = (index: number) => {
  return {
    id: `horizontal-tab-${index}`,
    "aria-controls": `horizontal-tabpanel-${index}`,
  };
};

const HolidayHorizontalTabs: React.FC<InfoNextHolidays> = ({
  todayHolidays,
  nextHolidays,
}) => {
  const { t } = useTranslation();
  const currentLanugage = useAppSelector((state) => state.options.language);
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: 320, minWidth: "100%" }}>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        aria-label="Scrollable horizontal tabs of upcoming holidays"
        sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}
      >
        {todayHolidays.length === 0 ? (
          <Tab key="today" label={t("main.global.today")} {...a11yProps(0)} />
        ) : (
          todayHolidays.map((_holiday, index) => (
            <Tab
              key={index}
              label={t("main.global.today")}
              {...a11yProps(index)}
            />
          ))
        )}
        {todayHolidays.length === 0
          ? nextHolidays.map((holiday, index) => (
              <Tab
                key={index + 1}
                label={formatDateLocal(holiday.date, currentLanugage)}
                {...a11yProps(index + 1)}
              />
            ))
          : nextHolidays.map((holiday, index) => (
              <Tab
                key={index + todayHolidays.length}
                label={formatDateLocal(holiday.date, currentLanugage)}
                {...a11yProps(index + todayHolidays.length)}
              />
            ))}
      </Tabs>
      {/**
       * TabPanels for certain Tab declared in Tabs
       * TabPanels: HolidayTabPanel || NoTodayTabPanel
       */}
      {todayHolidays.length === 0 ? (
        <>
          <NoTodayTabPanel value={value} index={0} />
          {nextHolidays.map((holiday, index) => (
            <HolidayTabPanel
              key={index + 1}
              value={value}
              index={index + 1}
              countryHoliday={holiday}
            />
          ))}
        </>
      ) : (
        <>
          {todayHolidays.map((holiday, index) => (
            <HolidayTabPanel
              key={index}
              value={value}
              index={index}
              countryHoliday={holiday}
            />
          ))}
          {nextHolidays.map((holiday, index) => (
            <HolidayTabPanel
              key={index + todayHolidays.length}
              value={value}
              index={index + todayHolidays.length}
              countryHoliday={holiday}
            />
          ))}
        </>
      )}
    </Box>
  );
};

export default HolidayHorizontalTabs;
