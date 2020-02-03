var now = new Date();

var Weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var Month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
document.write(Weekday[now.getDay()] + ", " + Month[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear());