export const isPastTime = (date, time) => {
  let isPast = false;
  let myDate = date;
  myDate = myDate.split("-");
  const newDate = new Date(myDate[0], myDate[1] - 1, myDate[2]);
  myDate = newDate.getTime();
  let myTime = time;
  myTime = myTime.split(":");
  const newTime = (myTime[0] * 3600 + myTime[1] * 60) * 1000;
  const actualTime = myDate + newTime;
  if (Date.now() > actualTime) {
    isPast = true;
  }
  return isPast;
};
