const formatDateLocal = (dateString: string, formatCode: string) => {
  const date = new Date(dateString);

  // Format the date in Croatian (Croatia) locale
  const localFormat = new Intl.DateTimeFormat(formatCode, {
    month: "numeric",
    day: "numeric",
  }).format(date);

  return localFormat;
};

export default formatDateLocal
