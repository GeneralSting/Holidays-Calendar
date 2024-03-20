import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

const CalendarSwitch = () => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch size="medium" checked={checked} onChange={handleChange} />
        }
        label={t("main.countryWeekends.switch")}
      />
    </FormGroup>
  );
};

export default CalendarSwitch;
