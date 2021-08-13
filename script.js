const ScrollHandler = (ElemID) => {
  let elem = document.querySelector(ElemID);
  elem.scrollIntoView();
};

var rd1 = document.getElementById("back-1");
var rd2 = document.getElementById("back-2");
var rd3 = document.getElementById("back-3");
var rd4 = document.getElementById("back-4");
var rd5 = document.getElementById("back-5");
const backimg = document.querySelector("#head_back");
rd1.addEventListener("click", () => {
  backimg.style.backgroundImage = "url('assets/1.jpg')";
});
rd2.addEventListener("click", () => {
  backimg.style.backgroundImage = "url('assets/2.jpg')";
});

rd3.addEventListener("click", () => {
  backimg.style.backgroundImage = "url('assets/3.jpg')";
});

rd4.addEventListener("click", () => {
  backimg.style.backgroundImage = "url('assets/6.jpg')";
});
rd5.addEventListener("click", () => {
  backimg.style.backgroundImage = "url('assets/5.jpg')";
});
