import { Route, Routes } from "react-router-dom";
import appRoutes from "./routes/AppRoutes";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, ThemeProvider } from "@mui/material";
import { useAppSelector } from "./hooks/storeHooks";
import { getTheme } from "./features/themes";
import { Footer, Header } from "./layout";

function App() {
  const appTheme = useAppSelector((state) => state.options.appTheme);
  return (
    <>
      <ThemeProvider theme={getTheme(appTheme)}>
        <Grid
          sx={{ minHeight: "100%" }}
          container
          direction="column"
          alignItems="stretch"
        >
          <Grid item>
            <Header />
          </Grid>
          <Grid item xs display="flex" justifyContent="center">
            <Grid container direction="row" sx={{ marginBottom: 2 }}>
              <Grid item sm={1} />
              <Grid item sm={10} xs>
                <Routes>
                  {appRoutes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                </Routes>
              </Grid>
              <Grid item sm={1} />
            </Grid>
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
