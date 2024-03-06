import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { OptionsIcon } from "../features/headerOptions";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container>
          <Grid
            item
            xs={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <OptionsIcon />
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Typography variant="h4" color="inherit" component="h4" noWrap>
              {t("header.title")}
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          ></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
