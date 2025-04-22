let isOpenInquqeryContainer = false;

const inqueryIcon = document.getElementById("inquery_icon");
const inqueryBox = document.getElementById("inquery_container");
const closeInqueryIcon = document.getElementById("close_inquery_icon");

inqueryIcon.addEventListener("click", () => {
  if (!isOpenInquqeryContainer) {
    inqueryBox.classList.add("open_inquery_container");
    inqueryIcon.classList.add("close_inquery_icon");
    isOpenInquqeryContainer = true;
  }
});

closeInqueryIcon.addEventListener("click", () => {
  if (isOpenInquqeryContainer) {
    inqueryBox.classList.remove("open_inquery_container");
    inqueryIcon.classList.remove("close_inquery_icon");
    isOpenInquqeryContainer = false;
  }
});
