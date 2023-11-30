const order_one_page = document.getElementById("order-one-page");
const order_multi_page = document.getElementById("order-multi-page");
const order_online_store = document.getElementById("order-online-store");
const subject_filed = document.getElementById("subject");
const message_field = document.getElementById("message");
const applicantForm = document.getElementById("contact-form");

function handleFormSubmit(event) {
  event.preventDefault();
  const data = Array.from(serializeForm(applicantForm));
  alert(`
  Hello, ${data[0][1]}
  We got your message about ${data[2][1]} successfully!
  The answer will come by email: ${data[1][1]}
  `);
  event.target.reset();
}

function serializeForm(formNode) {
  return new FormData(formNode);
}

function change_fields_color() {
  subject_filed.style.color = "#474a51";
  message_field.style.color = "#474a51";
}

applicantForm.addEventListener("submit", handleFormSubmit);

order_one_page.addEventListener("click", () => {
  change_fields_color();
  subject_filed.value = "Single Page Apllication";
  message_field.value =
    "I would like to get for information about creating of Single Page Application!";
});

order_multi_page.addEventListener("click", () => {
  change_fields_color();
  subject_filed.value = "Multi Page Apllication";
  message_field.value =
    "I would like to get for information about creating of Multi Page Application!";
});

order_online_store.addEventListener("click", () => {
  change_fields_color();
  subject_filed.value = "Online Store";
  message_field.value =
    "I would like to get for information about creating of Online Store!";
});
