import { FC } from "react";
import isObjectEmpty from "../utils/isObjectEmpty";
import ErrorMsg from "./ErrorMsg";
import LoadingMsg from "./LoadingMsg";
import NoDataMsg from "./NoDataMsg";
import { useTranslation } from "react-i18next";
import { DataReadinessCheckProps } from "../types/DataReadinessCheckProps";

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
