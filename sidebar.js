//Authored by Scott Liu

//This function modifies the side bar such that the link to the webpage is removed if you are already on the page.
(function() {
  "use strict"
  const sidebarItems = document.getElementsByClassName("sidenavitems");
  const currentPage = window.location.pathname;
  for (let i = 0; i < sidebarItems.length; i++) {
    let pathName = "/" + sidebarItems[i].getAttribute("href");

    if (pathName == currentPage) {
      sidebarItems[i].remove();
    }
  }
})();