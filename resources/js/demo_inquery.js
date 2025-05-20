const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const demo_form = document.getElementById("demo_form");
const close_btn = document.getElementById("success_box_close_btn");
const success_msg_box = document.querySelector(".success_msg_box");

// emailjs.init({
//   publicKey: "pHteUwY88lk3RCqBZ",
// });

let ismailSending = false;

close_btn.addEventListener("click", (e) => {
  e.preventDefault();

  success_msg_box.classList.remove("open_box");
});

demo_form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email_field = document.getElementById("demo_mail");
  const user_field = document.getElementById("demo_users");
  const printer_field = document.getElementById("demo_printers");

  const user_warning = document.querySelector(".user_warning");
  const printer_warning = document.querySelector(".printer_warning");

  if (user_field.value === "0") {
    user_warning.classList.add("active_warning");
    return;
  } else {
    user_warning.classList.remove("active_warning");
  }

  if (printer_field.value === "0") {
    printer_warning.classList.add("active_warning");
    return;
  } else {
    printer_warning.classList.remove("active_warning");
  }

  if (!emailRegex.test(email_field.value)) {
    return;
  }

  emailjs.init({
    publicKey: "pHteUwY88lk3RCqBZ",
  });

  if (!ismailSending) {
    ismailSending = true;
  } else {
    return;
  }

  emailjs
    .sendForm("service_usbcjqa", "template_3qhiana", "#demo_form")
    .then((res) => {
      ismailSending = false;
      success_msg_box.classList.add("open_box");
      demo_form.reset();
    });
});
