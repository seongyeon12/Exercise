var daysBetweenDates = function(date1, date2) {
    const oldDays = new Date(date1),
    now = new Date(date2);
      
    return Math.abs((oldDays.getTime() - now.getTime()) / 86400000);
  };
 
  console.log(daysBetweenDates("2022-02-05", "2022-05-08"))