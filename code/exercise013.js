function dateNbDays(a0, a, p) {
  let currentAmount = a0;
  let days = 0;
  const dailyRate = p / 36000;
  const startDate = new Date(2016, 0, 1); // January 1, 2016

  while (currentAmount < a) {
    currentAmount += currentAmount * dailyRate;
    days++;
  }

  startDate.setDate(startDate.getDate() + days);
  const year = startDate.getFullYear();
  const month = String(startDate.getMonth() + 1).padStart(2, "0");
  const day = String(startDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
