//https://docs.google.com/spreadsheets/d/1lapR34-VWl1f2nfaLiqmIpQo7Vz__2-daCr6FLEnaDU/edit?usp=sharing
//There is a spreadsheet with a list of prices with items in column A and corresponding prices in column B. It gets updated, some items become more expensive, some items disappear. What I need to find out is what changed in the new pricelist. In terms if excel I need something like this:
//For each cell in column A get the corresponding old price from column B, find the same item in the new pricelist and compare the prices.

//If the spreadsheets were json objects I would do something like this:

const oldPrice = {
  "Фиксация коронки на Fuji plus (стоматология терапия)":	500,
"Фиксация коронки, вкладки на Relyx U100 (стоматология терапия)":	600,
  "Фиксация коронки на Fuji plus (для пациентов, проходивших лечение в другом лечебном учреждении) (стоматология терапия)": 500,
  "Снятие металлической коронки по ортопедическим показаниям":	250,
"Снятие керамической коронки по ортопедическим показаниям":	550
}

const newPrice = {
  "Фиксация коронки на Fuji plus (стоматология терапия)":	600,
"Фиксация коронки, вкладки на Relyx U100 (стоматология терапия)":	700,
  "Фиксация коронки на Fuji plus (для пациентов, проходивших лечение в другом лечебном учреждении) (стоматология терапия)": 500,
  "Снятие металлической коронки по ортопедическим показаниям":	250,
"Новая позиция":	550
}

function findWhatChanged() {
  const updates = {}
  for (key in oldPrice) {
    if (oldPrice[key] != newPrice[key]) {
      updates[key] = newPrice[key]
    }
  }

  return updates
}

console.log(findWhatChanged())