let isOpenInquqeryContainer = false;
let isOpenSuccessBox = false;
let isSendingMail = false;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const inqueryIcon = document.getElementById("inquery_icon");
const inqueryBox = document.getElementById("inquery_container");
const closeInqueryIcon = document.getElementById("close_inquery_icon");

const successInfoBox = document.getElementById("success_info_box");
const closeSuccessInfoBtn = document.getElementById("close_success_info_btn");
const closeSuccessInfoIcon = document.getElementById("close_success_info_icon");

const demo_form = document.getElementById("demo_form");

emailjs.init({
  publicKey: "pHteUwY88lk3RCqBZ",
});

const inqueryForm = document.getElementById("inqueryForm");
const nameField = inqueryForm.getElementsByClassName("form_input")[0];
const companyField = inqueryForm.getElementsByClassName("form_input")[1];
const emailField = inqueryForm.getElementsByClassName("form_input")[2];
const messageField = inqueryForm.getElementsByClassName("form_input")[3];

inqueryForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!isSendingMail) {
    isSendingMail = true;
    emailjs
      .sendForm("service_usbcjqa", "template_z2buh58", "#inqueryForm")
      .then(
        (res) => {
          inqueryForm.reset();
          if (!isOpenSuccessBox) {
            successInfoBox.classList.add("open_success_info_box");
            isOpenSuccessBox = true;
          }
          isSendingMail = false;
        },
        (err) => {
          console.log("Failure of sending mail.", err);
          isSendingMail = false;
        }
      );
  }
});

closeSuccessInfoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (isOpenSuccessBox) {
    successInfoBox.classList.remove("open_success_info_box");
    isOpenSuccessBox = false;
    if (isOpenInquqeryContainer) {
      inqueryBox.classList.remove("open_inquery_container");
      inqueryIcon.classList.remove("close_inquery_icon");
      isOpenInquqeryContainer = false;
    }
  }
});

closeSuccessInfoIcon.addEventListener("click", (e) => {
  e.preventDefault();
  if (isOpenSuccessBox) {
    successInfoBox.classList.remove("open_success_info_box");
    isOpenSuccessBox = false;
    if (isOpenInquqeryContainer) {
      inqueryBox.classList.remove("open_inquery_container");
      inqueryIcon.classList.remove("close_inquery_icon");
      isOpenInquqeryContainer = false;
    }
  }
});

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

demo_form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name_field = document.getElementById("demo_name");
  const company_field = document.getElementById("company_field");
  const email_field = document.getElementById("demo_mail");
  const user_field = document.getElementById("demo_users");
  const printer_field = document.getElementById("demo_printers");

  console.log(name_field.value);
  console.log(company_field.value);
  console.log(email_field.value);
  console.log(user_field.value);
  console.log(printer_field.value);
});
