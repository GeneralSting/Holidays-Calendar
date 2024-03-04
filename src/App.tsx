import { Route, Routes } from "react-router-dom";
import appRoutes from "./routes/AppRoutes";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { useAppSelector } from "./hooks/storeHooks";
import { getTheme } from "./features/themes";

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
          <Grid
            item
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Routes>
              {appRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
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
