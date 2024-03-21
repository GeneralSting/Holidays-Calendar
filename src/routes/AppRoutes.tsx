import { CountryHolidays, PageNotFound, Welcome } from "../pages";
import { AppRoute } from "../types";

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Welcome />
  },
  {
    path: "/:selectedCountryCode",
    element: <CountryHolidays />
  },
  {
    path: "*",
    element: <PageNotFound />
  }  
];

export default appRoutes;
