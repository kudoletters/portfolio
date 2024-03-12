function toggleMenu() {
    var sideMenu = document.getElementById("side-menu");
    var menuItems = document.querySelectorAll(".side-menu ul li");

  if (sideMenu.style.width === "100%") {
    sideMenu.style.width = "0";
    menuItems.forEach(function(item) {
    item.style.opacity = "0";
    });
  } else {
    sideMenu.style.width = "100%";
    menuItems.forEach(function(item) {
    item.style.opacity = "1";
    });
  }
}