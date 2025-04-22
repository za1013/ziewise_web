// Start - Main text fixed center position of view area.
const contentSection = document.getElementById("content_section");

const mainText = document.getElementById("main_text");
const contentBackground = document.getElementsByClassName("content_background");
const itemList = document.getElementsByClassName("item_box");
const titleText = document.getElementById("title_text");
const subText = document.getElementById("sub_text");

let focusItemNum = 0;

mainText.style.top = `${(window.innerHeight - 57) / 2}px`;

contentSection.addEventListener("scroll", () => {
  const scrollTop = contentSection.scrollTop;
  const viewportHeight = window.innerHeight - 57;

  const middle = scrollTop + viewportHeight / 2;

  mainText.style.top = `${middle}px`;
  console.log(itemList[0].getBoundingClientRect().top);
  if (itemList[0].getBoundingClientRect().top > 57) {
    if (focusItemNum !== 0) {
      contentBackground[0].className = `content_background content_background_first`;
      titleText.innerText =
        itemList[0].getElementsByClassName("item_text_title")[0].innerText;
      subText.innerText =
        itemList[0].getElementsByClassName("item_text_subtitle")[0].innerText;
      focusItemNum = 0;
    }
  } else if (itemList[0].getBoundingClientRect().top >= -393) {
    if (focusItemNum !== 1) {
      contentBackground[0].className = `content_background content_background_second`;
      titleText.innerText =
        itemList[1].getElementsByClassName("item_text_title")[0].innerText;
      subText.innerText =
        itemList[1].getElementsByClassName("item_text_subtitle")[0].innerText;
      focusItemNum = 1;
    }
  } else if (itemList[0].getBoundingClientRect().top >= -843) {
    if (focusItemNum !== 2) {
      contentBackground[0].className = `content_background content_background_thrid`;
      titleText.innerText =
        itemList[2].getElementsByClassName("item_text_title")[0].innerText;
      subText.innerText =
        itemList[2].getElementsByClassName("item_text_subtitle")[0].innerText;
      focusItemNum = 2;
    }
  } else {
    if (focusItemNum !== 3) {
      contentBackground[0].className = `content_background content_background_forth`;
      titleText.innerText =
        itemList[3].getElementsByClassName("item_text_title")[0].innerText;
      subText.innerText =
        itemList[3].getElementsByClassName("item_text_subtitle")[0].innerText;
      focusItemNum = 3;
    }
  }
});
// End - Main text fixed center position of view area.
