import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { setAppTheme, setLanguage } from "../data/optionsSlice";

const OptionsIcon = () => {
  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const appTheme = useAppSelector((state) => state.options.appTheme);
  const appLanguage = useAppSelector((state) => state.options.language);
  


  const themeChange = (event: SelectChangeEvent<typeof appTheme>) => {
    const themeValue = event.target.value || "";
    dispatch(setAppTheme(themeValue))
  };

  const languageChange = (event: SelectChangeEvent<typeof appLanguage>) => {
    const languageValue = event.target.value || "";
    dispatch(setLanguage(languageValue))
  };

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <SettingsIcon />
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1
          }}
        >
          Change app options
          <IconButton
            color="inherit"
            onClick={() => setOpen(false)}
            aria-label="close dialog"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container direction="row" alignItems="center" spacing={4}>
            <Grid
              item
              xs={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <FormControl sx={{ m: 1, minWidth: "100%" }}>
                <InputLabel id="theme-select">Theme</InputLabel>
                <Select
                  labelId="theme-select"
                  value={appTheme}
                  onChange={themeChange}
                  input={<OutlinedInput label="Theme" />}
                >
                  <MenuItem value="light">Light Theme</MenuItem>
                  <MenuItem value="dark">Dark Theme</MenuItem>
                  <MenuItem value="custom">Custom Theme</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <FormControl sx={{ m: 1, minWidth: "100%" }}>
                <InputLabel id="language-select">Language</InputLabel>
                <Select
                  labelId="language-select"
                  value={appLanguage}
                  onChange={languageChange}
                  input={<OutlinedInput label="Language" />}
                >
                  <MenuItem value="hr">Croaita</MenuItem>
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="ge">Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OptionsIcon;
