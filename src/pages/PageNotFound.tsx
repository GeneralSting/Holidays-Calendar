import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("main.pages.pageNotFound")}</title>
      </Helmet>
      <div className="centered-div">
        <h1>{t("main.pages.pageNotFound")}</h1>
      </div>
    </>
  );
};

export default PageNotFound;
