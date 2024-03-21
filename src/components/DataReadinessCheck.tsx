import { FC } from "react";
import { useTranslation } from "react-i18next";
import { DataReadinessCheckProps } from "../types";
import { ErrorMsg, LoadingMsg, NoDataMsg } from ".";
import { isObjectEmpty } from "../utils";

const DataReadinessCheck: FC<DataReadinessCheckProps> = ({
  loading,
  loadingMessage,
  customError,
  data,
  children,
}) => {
  const { t } = useTranslation();
  if (loading) {
    return <LoadingMsg message={loadingMessage} />;
  }

  if (customError && customError !== undefined) {
    return <ErrorMsg message={customError} />;
  }

  if (!data || (Array.isArray(data) && data.length === 0)) {
    return <NoDataMsg message={t("main.countryInfo.noInfoData")} />;
  }

  if (!Array.isArray(data) && isObjectEmpty(data)) {
    return <NoDataMsg message={t("main.countryInfo.noInfoData")} />;
  }

  // If none of the above conditions are met, render children
  return <>{children}</>;
};

export default DataReadinessCheck;
