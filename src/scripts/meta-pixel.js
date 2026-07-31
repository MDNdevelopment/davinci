// Loads the Meta Pixel only after the visitor's first interaction, instead
// of on initial page load. Avoids setting third-party cookies (and the
// connect.facebook.net console error some ad-blockers cause) before the
// user has actually engaged with the page.
function loadPixel() {
  if (window.fbq) return;
  (function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js",
  );
  window.fbq("init", "1026621875320128");
  window.fbq("track", "PageView");
}

const interactionEvents = ["scroll", "click", "keydown", "touchstart"];
let pixelLoaded = false;

function onFirstInteraction() {
  if (pixelLoaded) return;
  pixelLoaded = true;
  interactionEvents.forEach((evt) =>
    window.removeEventListener(evt, onFirstInteraction),
  );
  loadPixel();
}

interactionEvents.forEach((evt) =>
  window.addEventListener(evt, onFirstInteraction, {
    once: true,
    passive: true,
  }),
);
