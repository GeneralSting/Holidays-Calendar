import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Typography
      align="center"
      p={0.4}
      variant="h5"
      id="footer-text"
    >
      <a
        href={"https://github.com/GeneralSting/Holidays-Calendar"}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
       © Copyright GH
      </a>{" "}
    </Typography>
  );
};

export default Footer;
