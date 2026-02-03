export const calculateStats = (data) => {
  let total = 0;
  let categoryTotals = {};
  let monthlyTotals = {};

  data.forEach((item) => {
    const amount = parseFloat(item.Amount);
    const category = item.Category;
    const month = item.Date.slice(0, 7);

    total += amount;

    categoryTotals[category] = (categoryTotals[category] || 0) + amount;
    monthlyTotals[month] = (monthlyTotals[month] || 0) + amount;
  });

  const topCategory = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b
  );

  return { total, categoryTotals, monthlyTotals, topCategory };
};
