import { ReporterProps } from "../types/reporterProps";

const LoadingMsg: React.FC<ReporterProps> = ({ message }) => {
  return (
    <div>
      <h1>Loading...</h1>
      <h3>{message}</h3>
    </div>
  );
};

export default LoadingMsg;