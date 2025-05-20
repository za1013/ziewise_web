const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const inquery_form = document.getElementById("inquery_form");
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

inquery_form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email_field = document.getElementById("inquery_email");

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
    .sendForm("service_usbcjqa", "template_z2buh58", "#inquery_form")
    .then((res) => {
      ismailSending = false;
      success_msg_box.classList.add("open_box");
      inquery_form.reset();
    });
});
