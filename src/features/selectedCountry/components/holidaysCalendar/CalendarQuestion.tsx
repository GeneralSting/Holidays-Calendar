import HelpIcon from "@mui/icons-material/Help";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import { JSXElementConstructor, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<
      unknown,
      string | JSXElementConstructor<unknown>
    >;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CalendarQuestion = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <IconButton color="info" onClick={() => setOpen(true)}>
        <HelpIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
        fullWidth
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          {t("main.countryHoliday.calendarDialogTitle")}
          <IconButton
            color="inherit"
            onClick={() => setOpen(false)}
            aria-label="close dialog"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className="centered-div">
            <Typography variant="body1">
              {t("main.countryHoliday.calendarDialogContent")}
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CalendarQuestion;
