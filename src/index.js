document.addEventListener("DOMContentLoaded", function () {
  var launchDate = new Date("June 15, 2020 00:00:00").getTime();

  var launch = setInterval(function () {
    var now = new Date().getTime();
    var dif = launchDate - now;

    var days = Math.floor(dif / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((dif % (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML =
      days + "d " + hrs + "h " + mins + "m " + secs + "s";

    if (dif < 0) {
      clearInterval(launch);
    }
  }, 1000);
});
