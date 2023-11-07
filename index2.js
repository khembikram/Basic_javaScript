function totaltime() {
  var now = new Date();

  var day = now.getDay();
  var month = now.getMonth();
  var date = now.getDate();
  var year = now.getFullYear();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  var ml = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var ms = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  var time = `${hour} : ${minute} : ${second}`;

  var clock = ` ${ms[day]}  ${year}   ${time}  ${ml[month]} ${date}`;
  document.getElementById("mainclock").innerHTML = clock;
}

totaltime();
setInterval(totaltime,1000);

