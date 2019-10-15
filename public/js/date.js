function dateHandler(){
  let date = new Date();
  let month = date.toDateString().split(' ');
  let cal = [];
  cal[0] = 'January';
  cal[1] = 'February';
  cal[2] = 'March';
  cal[3] = 'April';
  cal[4] = 'May';
  cal[5] = 'June';
  cal[6] = 'July';
  cal[7] = 'August';
  cal[8] = 'September';
  cal[9] = 'October';
  cal[10] = 'November';
  cal[11] = 'December';
  let formattedMonth = cal[date.getMonth()];
  let formattedDay = month[2];
  let formattedYear = date.getFullYear();
  return [formattedMonth, formattedDay, formattedYear];
}
module.exports = dateHandler