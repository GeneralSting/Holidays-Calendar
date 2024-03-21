import { useTranslation } from "react-i18next";
import { ReporterProps } from "../types";

const NoDataMsg: React.FC<ReporterProps> = ({ message }) => {
  const { t } = useTranslation()
  return (
    <div style={{ textAlign: "center"}}>
      <h2>{t("main.global.noData")}</h2>
      <h3>{message}</h3>
    </div>
  );
};

export default NoDataMsg;
