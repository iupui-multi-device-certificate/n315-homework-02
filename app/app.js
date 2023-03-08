import { quotes } from "./models/model.js";

import { homeView, browseView } from "./views/view.js";

const titleBase = "Quotes";

const routes = {
  home: homeView,
  browse: browseView(quotes),
};

const changeRoute = () => {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  //set to home if empty string
  if (pageID == "") {
    pageID = "home";
  }
  document.getElementById("app").innerHTML = routes[pageID];
  $(document).attr("title", `${titleBase} | ${pageID.toUpperCase()}`);
};

function initListeners() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}
$(document).ready(function () {
  initListeners();
});
