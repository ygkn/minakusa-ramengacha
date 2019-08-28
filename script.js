const gacha = document.querySelector(".gacha");
const button = document.querySelector(".control--button");
const scroller = new SweetScroll({}, gacha);

button.addEventListener("click", () =>
  scroller.toElement(
    gacha.children[Math.floor((gacha.children.length - 1) * Math.random()) + 1]
  )
);
