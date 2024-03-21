import { CircularProgress } from "@mui/material";
import { ReporterProps } from "../types";

const LoadingMsg: React.FC<ReporterProps> = ({ message }) => {
  return (
    <div className="centered-div">
      <CircularProgress />
      <h3>{message}</h3>
    </div>
  );
};

export default LoadingMsg;
