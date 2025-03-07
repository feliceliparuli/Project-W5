window.addEventListener("scroll", () => {
  const colorNav = document.getElementsByClassName("top")[0];
  const buttonNav = document.getElementsByClassName("button-nav")[0];
  if (window.scrollY > 250) {
    colorNav.style.backgroundColor = "white";
    buttonNav.style.backgroundColor = "#1a8917";
  } else {
    (colorNav.style.backgroundColor = "#ffc017"),
      (buttonNav.style.backgroundColor = "black");
  }
});
