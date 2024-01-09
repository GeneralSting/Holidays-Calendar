import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { OptionsIcon } from "../features/headerOptions";

const Header = () => {
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
            <Typography variant="h4" color="inherit" component="h4">
              Global Holidays
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
