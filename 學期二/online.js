const zodiac = [
  { name: "牡羊", startMonth: 3, startDate: 21, endMonth: 4, endDate: 19 },
  { name: "金牛", startMonth: 4, startDate: 20, endMonth: 5, endDate: 20 },
  { name: "雙子", startMonth: 5, startDate: 21, endMonth: 6, endDate: 20 },
  { name: "巨蟹", startMonth: 6, startDate: 21, endMonth: 7, endDate: 22 },
  { name: "獅子", startMonth: 7, startDate: 23, endMonth: 8, endDate: 22 },
  { name: "處女", startMonth: 8, startDate: 23, endMonth: 9, endDate: 22 },
  { name: "天秤", startMonth: 9, startDate: 23, endMonth: 10, endDate: 22 },
  { name: "天蠍", startMonth: 10, startDate: 23, endMonth: 11, endDate: 21 },
  { name: "射手", startMonth: 11, startDate: 22, endMonth: 12, endDate: 21 },
  { name: "魔羯", startMonth: 12, startDate: 22, endMonth: 1, endDate: 19 },
  { name: "水瓶", startMonth: 1, startDate: 20, endMonth: 2, endDate: 18 },
  { name: "雙魚", startMonth: 2, startDate: 19, endMonth: 3, endDate: 20 },
];

function inputInforMation(name, startMonth, startDate, endMonth, endDate) {
  return {
    name: name,
    startMonth: startMonth,
    startDate: startDate,
    endMonth: endMonth,
    endDate: endDate,
  };
}

function dateCal(month, date) {
  return 100 * month + date;
}

let date = dateCal();
function starSign(Date) {}

// 12/21-12/31 1/1-1/19




