// Typed
var typed = new Typed("#typed", {
  strings: ["Full Stack", "Web Developer", "React Developer"],
  stringselement: null,
  typedSpeed: 95,
  startDelay: 150,
  backSpeed: 30,
  backDelay: 1000,
  loop: true,
  loopCount: 550,
  showCursor: true,
  cursorChar: "|",
  attr: null,
  contentTypeL: "html",
});

// MixitUp
var container = $(".mixitup");
mixitup(container);

// navtoggle
$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".small-device").slideToggle();
  });
});
