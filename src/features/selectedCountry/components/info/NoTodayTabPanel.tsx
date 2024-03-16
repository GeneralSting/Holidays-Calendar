import { useTranslation } from "react-i18next";
import { TabPanelProps } from "../../types/tabPanelProps";
import { Box, Typography } from "@mui/material";

const NoTodayTabPanel = (props: TabPanelProps) => {
  const { value, index, ...other } = props;
  const { t } = useTranslation();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography variant="h4" textAlign="center">
            {t("main.countryInfo.todayNotHoliday")}
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default NoTodayTabPanel;
