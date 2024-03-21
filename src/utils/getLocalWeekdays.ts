import i18next from "i18next";

const getLocalWeekdays = (): string[] => {
  return [
    i18next.t("weekdays.mondayShort"),
    i18next.t("weekdays.tuesdayShort"),
    i18next.t("weekdays.wednesdayShort"),
    i18next.t("weekdays.thursdayShort"),
    i18next.t("weekdays.fridayShort"),
    i18next.t("weekdays.saturdayShort"),
    i18next.t("weekdays.sundayShort"),
  ];
};

export default getLocalWeekdays;
