import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../../hooks/storeHooks";
import { updateCheckLongWeekends } from "../../data/countrySlice";

const CalendarSwitch = () => {
  const { t } = useTranslation();
  const longWeekends = useAppSelector(
    (state) => state.country.checkedLongWeekends
  );
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateCheckLongWeekends(event.target.checked));
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            size="medium"
            checked={longWeekends}
            onChange={handleChange}
          />
        }
        label={t("main.countryWeekends.switch")}
      />
    </FormGroup>
  );
};

export default CalendarSwitch;
