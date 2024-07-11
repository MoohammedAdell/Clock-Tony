let hours = document.getElementById("hours");
let minute = document.getElementById("minute");
let seconde = document.getElementById("seconde");
let ampm = document.getElementById("ampm");
function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let aamppm = "AM";
  if (h > 12) {
    h = h - 12;
    aamppm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hours.innerText = h;
  minute.innerText = m;
  seconde.innerText = s;
  ampm.innerText = aamppm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
