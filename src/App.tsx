import { Route, Routes } from "react-router-dom";
import "./App.css";
import appRoutes from "./routes/AppRoutes";
import { CssBaseline, Grid } from "@mui/material";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
