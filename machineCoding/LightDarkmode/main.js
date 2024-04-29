const toggleSwitch = document.getElementById("toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    applyDarkMode();
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    applyDarkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    applyLightMode();
  }
}

function applyDarkMode() {
  document.documentElement.style.setProperty(
    "--primary-color",
    "var(--primary-color-dark)"
  );
  document.documentElement.style.setProperty(
    "--secondary-color",
    "var(--secondary-color-dark)"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    "var(--text-color-dark)"
  );
  document.documentElement.style.setProperty(
    "--bg-color",
    "var(--bg-color-dark)"
  );
}

function applyLightMode() {
  document.documentElement.style.setProperty(
    "--primary-color",
    "var(--primary-color-light)"
  );
  document.documentElement.style.setProperty(
    "--secondary-color",
    "var(--secondary-color-light)"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    "var(--text-color-light)"
  );
  document.documentElement.style.setProperty(
    "--bg-color",
    "var(--bg-color-light)"
  );
}

toggleSwitch.addEventListener("change", switchTheme, false);
