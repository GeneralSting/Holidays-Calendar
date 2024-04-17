import { Suspense, lazy } from "react";
import { Welcome } from "../pages";
import { AppRoute } from "../types";
import { LoadingMsg } from "../components";

const CountryHolidays = lazy(() =>
  import("../pages").then((module) => {
    return { default: module.CountryHolidays };
  })
);
const PageNotFound = lazy(() =>
  import("../pages").then((module) => {
    return { default: module.CountryHolidays };
  })
);

const AppRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/:selectedCountryCode",
    element: (
      <Suspense fallback={<LoadingMsg />}>
        <CountryHolidays />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingMsg />}>
        <PageNotFound />
      </Suspense>
    ),
  },
];

export default AppRoutes;
