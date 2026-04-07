(function () {
  var destinationOrigin = "https://bymyleslee.com";
  var currentPath = window.location.pathname;

  if (currentPath === "/portfolio") {
    currentPath = "/";
  } else if (currentPath.indexOf("/portfolio/") === 0) {
    currentPath = currentPath.slice("/portfolio".length) || "/";
  }

  var target = new URL(currentPath || "/", destinationOrigin);
  target.search = window.location.search;
  target.hash = window.location.hash;

  window.location.replace(target.toString());
})();
