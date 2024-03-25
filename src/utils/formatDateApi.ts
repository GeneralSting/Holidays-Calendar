const formatDateApi = (date: Date): string => {
  const formattedMonth = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 because months are 0-indexed
  const formattedDay = String(date.getDate()).padStart(2, "0");

  // Return the formatted date string in "yyyy-mm-dd" format
  return `${date.getFullYear()}-${formattedMonth}-${formattedDay}`;
};

export default formatDateApi;
