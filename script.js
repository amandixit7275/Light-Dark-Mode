const toggleSwitch = document.querySelector('input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

//Switch Theme Dynamically
toggleSwitch.addEventListener("change", switchTheme);

//Interview questions practice
