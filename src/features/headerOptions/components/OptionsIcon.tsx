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
import { themes } from "../../themes";
import { useTranslation } from "react-i18next";
import { languages } from "../../languages";

const OptionsIcon = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const appTheme = useAppSelector((state) => state.options.appTheme);
  const appLanguage = useAppSelector((state) => state.options.language);

  const themeChange = (event: SelectChangeEvent<typeof appTheme>) => {
    const themeValue = event.target.value || "";
    dispatch(setAppTheme(themeValue));
  };

  const languageChange = (event: SelectChangeEvent<typeof appLanguage>) => {
    const languageValue = event.target.value || "";
    dispatch(setLanguage(languageValue));
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
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          {t("header.options.title")}
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
              md={6}
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <FormControl sx={{ m: 1, minWidth: "100%" }}>
                <InputLabel id="theme-select">
                  {t("header.options.themeLabel")}
                </InputLabel>
                <Select
                  labelId="theme-select"
                  value={appTheme}
                  onChange={themeChange}
                  input={
                    <OutlinedInput label={t("header.options.themeLabel")} />
                  }
                >
                  {themes.map((theme, index) => (
                    <MenuItem key={index} value={theme.code}>
                      {theme.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <FormControl sx={{ m: 1, minWidth: "100%" }}>
                <InputLabel id="language-select">
                  {t("header.options.languageLabel")}
                </InputLabel>
                <Select
                  labelId="language-select"
                  value={appLanguage}
                  onChange={languageChange}
                  input={
                    <OutlinedInput label={t("header.options.languageLabel")} />
                  }
                >
                  {languages.map((language) => (
                    <MenuItem key={language.abbr} value={language.abbr}>
                      {language.name}
                    </MenuItem>
                  ))}
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
