import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TabPanelProps } from "../../types/tabPanelProps";
import { useTranslation } from "react-i18next";
import { CountryHoliday } from "../../types/countryHoliday";
import formatDateLocal from "../../../../utils/formatDateLocal";
import { useAppSelector } from "../../../../hooks/storeHooks";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const VerticalTabs = ({ holidays }: { holidays: CountryHoliday[] }) => {
  const { t } = useTranslation();
  const currentLanugage = useAppSelector((state) => state.options.language);
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs of upcoming holidays"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label={t("main.global.today")} {...a11yProps(0)} />
        {holidays.map((holiday, index) => (
          <Tab
            key={index}
            label={formatDateLocal(holiday.date, currentLanugage)}
            {...a11yProps(index + 1)}
          />
        ))}
      </Tabs>
      <TabPanel value={value} index={0}>
        {t("main.global.today")}
      </TabPanel>
      {holidays.map((holiday, index) => (
        <TabPanel key={index} value={value} index={index + 1}>
          {/* Content for each holiday TabPanel */}
          {holiday.name}
        </TabPanel>
      ))}
    </Box>
  );
};

export default VerticalTabs;
