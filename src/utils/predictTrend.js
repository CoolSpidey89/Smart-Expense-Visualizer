export const predictNextMonth = (monthlyTotals) => {
  const values = Object.values(monthlyTotals);
  if (values.length < 3) return null;

  const last = values[values.length - 1];
  const prev = values[values.length - 2];
  const prev2 = values[values.length - 3];

  const recentGrowth = last - prev;
  const olderGrowth = prev - prev2;

  const weightedGrowth = (recentGrowth * 0.7) + (olderGrowth * 0.3);

  return Math.max(last + weightedGrowth, 0);
};
