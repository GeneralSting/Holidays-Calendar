import { useTranslation } from "react-i18next";
import { TabPanelProps } from "../../types/tabPanelProps";
import { Box, Grid, Typography } from "@mui/material";

const HolidayTabPanel = (props: TabPanelProps) => {
  const { index, value, countryHoliday, ...other } = props;
  const { t } = useTranslation();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      {value === index && countryHoliday && (
        <Box>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            rowGap={3}
            sx={{ textAlign: "start" }}
          >
            <Grid item xs={5}>
              <Typography variant="body1">
                {t("main.countryInfo.holidayName")}
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="body1">{countryHoliday.name}</Typography>
            </Grid>

            <Grid item xs={5}>
              <Typography variant="body1">
                {t("main.countryInfo.holidayLocalName")}
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant="body1">
                {countryHoliday.localName}
              </Typography>
            </Grid>

            <Grid item xs={5}>
              <Typography variant="body1">
                {t("main.countryInfo.holidayFixed")}
              </Typography>
            </Grid>
            <Grid item xs={7}>
              {countryHoliday.fixed ? (
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
        </Box>
      )}
    </div>
  );
};

export default HolidayTabPanel;
