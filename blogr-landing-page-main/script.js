function toggleIntro() {
  let intro = document.getElementsByClassName("intro");
  if (intro[0].style.display != "none") {
    intro[0].style.display = "none";
  } else {
    intro[0].style.display = "block";
  }
}
