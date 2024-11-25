function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 50;
  const perTableWood = 20;
  const perBedWood = 30;
  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;
  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

console.log(woodQuantity(2, 4, 6));
