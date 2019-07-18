export default function debounce(callback, timeItWillWait, c) {
  var d, e;
  return function() {
    function h() {
      d = null;
      c || (e = callback.apply(f, g));
    }
    var f = this,
      g = arguments;
    return (
      clearTimeout(d),
      (d = setTimeout(h, timeItWillWait)),
      c && !d && (e = callback.apply(f, g)),
      e
    );
  };
}

export function removeHTMLTags(str) {
  return str.replace(/<[^>]*>?/gm, "");
}
