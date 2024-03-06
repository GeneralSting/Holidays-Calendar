import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();
  return <div>{t("main.hello")}</div>;
};

export default Welcome;
