import CountryHolidays from "../pages/CountryHolidays";
import PageNotFound from "../pages/PageNotFound";
import Welcome from "../pages/Welcome";
import { AppRoute } from "../types/appRoute";

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Welcome />
  },
  {
    path: "/:country",
    element: <CountryHolidays />
  },
  {
    path: "*",
    element: <PageNotFound />
  }  
];

export default appRoutes;
