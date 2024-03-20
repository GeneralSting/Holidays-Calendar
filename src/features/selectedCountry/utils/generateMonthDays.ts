const generateMonthDays = (year: number, month: number): number[][] => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: (firstDayOfMonth + 6) % 7 }, () => 0);

  const allDays = [...blanks, ...days];

  const weeks: number[][] = [];
  for (let i = 0; i < allDays.length; i += 7) {
    weeks.push(allDays.slice(i, i + 7));
  }
  return weeks;
};

export default generateMonthDays;
