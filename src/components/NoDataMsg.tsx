import { ReporterProps } from "../types/reporterProps";

const NoDataMsg: React.FC<ReporterProps> = ({ message }) => {
  return (
    <div>
      <h2>No Data to show</h2>
      <h3>{message}</h3>
    </div>
  );
};

export default NoDataMsg;
