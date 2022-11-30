let delayedredirect = (url) => {
  console.log(url);
  window.setTimeout(function () {
    window.location = url;
  }, 100);
};
