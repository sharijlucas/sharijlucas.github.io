var today = new Date();
var date = today.getDay();
var msg = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."
if (date == 5){
    document.getElementById("msg").textContent = msg;
}