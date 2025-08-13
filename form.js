const form = document.getElementById("contactForm");
const successAlert = document.getElementById("successAlert");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  document.querySelectorAll(".error-msg").forEach((msg) => {
    msg.style.display = "none";
    msg.textContent = "";
  });

  if (successAlert) successAlert.style.display = "none";

  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const subjectField = document.getElementById("subject");
  const messageField = document.getElementById("message");

  if (nameField.value.trim() === "") {
    nameField.nextElementSibling.textContent = "Full name is required.";
    nameField.nextElementSibling.style.display = "block";
    isValid = false;
  }

  const emailValue = emailField.value.trim();
  if (emailValue === "") {
    emailField.nextElementSibling.textContent = "Email is required.";
    emailField.nextElementSibling.style.display = "block";
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    emailField.nextElementSibling.textContent =
      "Please enter a valid email address (e.g., name@example.com).";
    emailField.nextElementSibling.style.display = "block";
    isValid = false;
  }

  if (subjectField.value.trim() === "") {
    subjectField.nextElementSibling.textContent = "Subject is required.";
    subjectField.nextElementSibling.style.display = "block";
    isValid = false;
  }

  if (messageField.value.trim() === "") {
    messageField.nextElementSibling.textContent = "Message is required.";
    messageField.nextElementSibling.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    successAlert.style.display = "block";
    setTimeout(() => {
      successAlert.style.display = "none";
    }, 3000);

    form.reset();
  }
});
