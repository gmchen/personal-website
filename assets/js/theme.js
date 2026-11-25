// Must load in <head> to avoid a flash of the wrong theme.
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}
