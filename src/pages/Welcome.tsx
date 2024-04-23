import { Helmet } from "react-helmet-async";
import { CountrySelect } from "../features/countries";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("main.pages.welcomePage")}</title>
        <meta
          name="description"
          content="Welcome to the main page of the Global Holidays app"
        />
        <meta name="keywords" content="welcome, global holidays, main page" />
      </Helmet>
      <CountrySelect />
    </>
  );
};

export default Welcome;
