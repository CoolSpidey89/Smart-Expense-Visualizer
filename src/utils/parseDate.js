export const parseDDMMYYYY = (dateStr) => {
  if (!dateStr) return null;

  const [day, month, year] = dateStr.split("-").map(Number);

  if (!day || !month || !year) return null;

  const date = new Date(year, month - 1, day);
  return isNaN(date) ? null : date;
};

export const getMonthKey = (dateStr) => {
  const date = parseDDMMYYYY(dateStr);
  if (!date) return null;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");

  return `${year}-${month}`;
};