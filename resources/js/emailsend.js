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

  //   emailjs.sendForm("service_usbcjqa", "template_z2buh58", "#inqueryForm").then(
  //     (response) => {
  //       console.log("Mail sended successfully.", response);
  //       inqueryForm.reset();
  //     },
  //     (err) => {
  //       console.log("Failure of sending mail.", err);
  //     }
  //   );

  inqueryForm.reset();
});
