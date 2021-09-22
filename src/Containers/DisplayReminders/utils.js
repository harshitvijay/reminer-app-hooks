export const isPastTime = (date, time) => {
  let isPast = false;
  let myDate = date;
  myDate = myDate.split("-");
  const newDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
  let myTime = time;
  myTime = myTime.split(":");
  const newTime =
    (myTime[0] * 3600 + myTime[1] * 60) * 1000 + newDate.getTime();
  if (Date.now() > newTime) {
    isPast = true;
  }
  return isPast;
};
