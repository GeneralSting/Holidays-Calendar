import { Grid, Typography } from "@mui/material";
import { CountryInfo } from "../../types/countryInfo";
import { useTranslation } from "react-i18next";

const InfoGrid = ({ countryInfo }: { countryInfo: CountryInfo }) => {
  const { t } = useTranslation();
  return (
    <Grid container spacing={2} sx={{textAlign: "start"}}>
      <Grid item xs={6}>
        <Typography variant="body1">{t("main.countryInfo.commonName")}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">{countryInfo.commonName}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="body1">{t("main.countryInfo.officialName")}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">{countryInfo.officialName}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="body1">{t("main.countryInfo.countryCode")}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">{countryInfo.countryCode}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="body1">{t("main.countryInfo.region")}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">{countryInfo.region}</Typography>
      </Grid>
    </Grid>
  );
};

export default InfoGrid;
