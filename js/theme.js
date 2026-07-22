/* Theme: dark default, remembered in localStorage. Applied ASAP to avoid flash.
   (This file is loaded in <head> before render.js.) */
(function () {
  var KEY = "ly-theme";
  var saved;
  try { saved = localStorage.getItem(KEY); } catch (e) { saved = null; }
  var theme = saved === "light" || saved === "dark" ? saved : "dark";
  document.documentElement.setAttribute("data-theme", theme);

  window.toggleTheme = function () {
    var cur = document.documentElement.getAttribute("data-theme");
    var next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
  };
})();
