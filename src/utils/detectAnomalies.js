export const detectAnomalies = (monthlyTotals) => {
  const values = Object.values(monthlyTotals);
  const months = Object.keys(monthlyTotals);

  if (values.length < 3) return [];

  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  const threshold = avg * 1.4; // 40% above normal

  return values
    .map((value, i) =>
      value > threshold ? { month: months[i], value } : null
    )
    .filter(Boolean);
};
