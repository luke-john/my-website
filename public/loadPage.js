const throttle = (fn, timing = 200) => {
  var timer;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(e => {
        fn.apply(this, args);
        timer = false;
      }, timing);
    }
  };
};

const updatePage = () => {
  var img = new Image();
  img.onload = function() {
    document.body.innerHTML = '';
    document.body.appendChild(img);
  };
  img.src = `/page.${window.innerWidth}x${window.innerHeight}.png`;
};

window.addEventListener('resize', throttle(updatePage, 200));

updatePage();
