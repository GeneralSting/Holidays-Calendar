const isObjectEmpty = (object: Record<string, unknown>) => {
  return Object.values(object).every((value) => value === null);
};

export default isObjectEmpty;
