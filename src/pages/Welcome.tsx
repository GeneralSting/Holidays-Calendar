import { useTranslation } from "react-i18next";
import { CountrySelect } from "../features/countries/components/CountrySelect";

const Welcome = () => {
  const { t } = useTranslation();
  return <CountrySelect />
};

export default Welcome;
