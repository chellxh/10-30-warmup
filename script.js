function time() {
  const today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour == 0 ? 12 : hour;
  document.getElementById("time").innerHTML =
    hour + ":" + minutes + ":" + seconds;
  setTimeout(time, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
