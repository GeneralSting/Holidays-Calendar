import { useTranslation } from "react-i18next";
import { ReporterProps } from "../types";

const ErrorMsg: React.FC<ReporterProps> = ({ message }) => {
  const { t } = useTranslation();
  return (
    <div className="centered-div">
      <h1>{t("main.global.dataError")}</h1>
      <h3>{message}</h3>
    </div>
  );
};

export default ErrorMsg;
