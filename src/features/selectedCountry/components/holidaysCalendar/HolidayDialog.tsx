import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { FC, useMemo } from "react";
import { HolidayDialogProps } from "../../types/holidayDialogProps";
import { formatDateLocal } from "../../../../utils";
import { useAppSelector } from "../../../../hooks/storeHooks";
import getHolidaysByDate from "../../utils/getHolidaysByDate";
import React from "react";

const HolidayDialog: FC<HolidayDialogProps> = ({
  dialogOpen,
  holidayDate,
  closeDialog,
}) => {
  const { t } = useTranslation();

  const currentLanguage = useAppSelector((state) => state.options.language);
  const countryHolidays = useAppSelector((state) => state.country.holidays);
  const holidaysByDate = useMemo(() => {
    if (holidayDate !== null) {
      return getHolidaysByDate(countryHolidays, holidayDate);
    }
    // If holidayDate is null, return null or whatever makes sense in your context
    return null;
  }, [countryHolidays, holidayDate]);

  const handleClose = () => {
    closeDialog();
  };

  return (
    <Dialog open={dialogOpen} onClose={handleClose} fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        {t("main.countryHoliday.holidayDialogTitle") +
          (holidayDate && formatDateLocal(holidayDate, currentLanguage))}
        <IconButton
          color="inherit"
          onClick={handleClose}
          aria-label="close dialog"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container rowGap={2}>
          {holidaysByDate &&
            holidaysByDate.map((holiday, index) => (
              <React.Fragment key={index}>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                >
                  <Typography variant="h5">{holiday.localName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {t("main.countryHoliday.name")}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{holiday.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {t("main.countryHoliday.countryCode")}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{holiday.countryCode}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {t("main.countryHoliday.fixed")}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {holiday.fixed
                      ? t("main.global.answerYes")
                      : t("main.global.answerNo")}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {t("main.countryHoliday.global")}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {" "}
                    {holiday.global
                      ? t("main.global.answerYes")
                      : t("main.global.answerNo")}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {t("main.countryHoliday.launchYear")}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {holiday.launchYear || "-"}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {t("main.countryHoliday.counties")}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  {holiday.counties !== null
                    ? holiday.counties?.map((county, index) => (
                        <React.Fragment key={index}>
                          {index + 1 !== holiday.counties?.length ? (
                            <Typography
                              variant="body1"
                              sx={{ display: "inline" }}
                            >
                              {county + ", "}
                            </Typography>
                          ) : (
                            <Typography
                              variant="body1"
                              sx={{ display: "inline" }}
                            >
                              {county}
                            </Typography>
                          )}
                        </React.Fragment>
                      ))
                    : "-"}
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    {t("main.countryHoliday.types")}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ mb: 2 }}>
                  {holiday.types?.map((type, index) => (
                    <React.Fragment key={index}>
                      {index + 1 !== holiday.types?.length ? (
                        <Typography variant="body1" sx={{ display: "inline" }}>
                          {type + ", "}
                        </Typography>
                      ) : (
                        <Typography variant="body1" sx={{ display: "inline" }}>
                          {type}
                        </Typography>
                      )}
                    </React.Fragment>
                  ))}{" "}
                </Grid>
                {index + 1 !== holidaysByDate.length ? (
                  <hr style={{ width: "100%" }} />
                ) : (
                  <></>
                )}
              </React.Fragment>
            ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default HolidayDialog;
