import { ReporterProps } from "../types/reporterProps";

const ErrorMsg: React.FC<ReporterProps> = ({ message }) => {
  return (
    <div>
      <h1>Error occurred!</h1>
      <h3>{message}</h3>
    </div>
  );
};

export default ErrorMsg;
