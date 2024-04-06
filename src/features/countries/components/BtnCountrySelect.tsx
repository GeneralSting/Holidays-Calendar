import { FC } from "react";
import { BtnCountrySelectProps } from "../types/BtnCountrySelectProps";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const BtnCountrySelect: FC<BtnCountrySelectProps> = ({
  selected,
  countryName,
  btnClicked,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {selected ? (
        <Button
          variant="contained"
          size="large"
          onClick={btnClicked}
          sx={{
            minWidth: "100%",
            padding: "1rem",
            borderRadius: 50,
            position: "relative",
            backgroundImage: `url('../../../images/bg/select-btn-bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              borderRadius: 50,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.6)",
              zIndex: 1,
            }}
          />
          <span
            style={{
              position: "relative",
              zIndex: 2,
              color: "white",
            }}
          >
            <Typography variant="h5">
              {t("main.countrySelect.btnCountrySelected") + countryName}
            </Typography>
          </span>
        </Button>
      ) : (
        <Button
          disabled
          variant="contained"
          size="large"
          sx={{
            minWidth: "100%",
            padding: "1rem",
            borderRadius: 50,
          }}
        >
          {t("main.countrySelect.btnNoCountry")}
        </Button>
      )}
    </>
  );
};

export default BtnCountrySelect;
