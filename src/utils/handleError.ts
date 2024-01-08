import AppError from "../models/appError";

const handleError = (error: unknown, additionalMessage?: string) => {
  if (error instanceof AppError) {
    additionalMessage && (error.setAdditionalMessage = additionalMessage);
    // log app error
    return Promise.reject(error.getMessage + " " + error.getAdditionalMessage);
  } else if (error instanceof Error) {
    return Promise.reject(error.message);
  }
  return Promise.reject("An unknown error occurred!");
};

export default handleError;
