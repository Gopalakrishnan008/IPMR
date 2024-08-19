// scroll progress
document.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const docHeight = document.body.clientHeight;
  const winHeight = window.innerHeight;
  const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});
