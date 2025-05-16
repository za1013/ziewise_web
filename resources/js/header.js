const lang_icon = document.getElementById("language_icon");
const lang_list = document.getElementById("language_list");
const menu_ham_icon = document.getElementById("ham");
const navigation_section = document.getElementById("navigation_section");

lang_icon.addEventListener("click", (e) => {
  e.preventDefault();

  lang_list.classList.toggle("active");
});

menu_ham_icon.addEventListener("click", (e) => {
  e.preventDefault();

  menu_ham_icon.classList.toggle("active");

  if (menu_ham_icon.classList.contains("active")) {
    navigation_section.classList.add("active");
  } else {
    navigation_section.classList.remove("active");
  }
});
