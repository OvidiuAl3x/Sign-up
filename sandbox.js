const inputs = document.querySelectorAll("input");
const patterns = {
  email: /^([a-z\d\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  username: /^[a-zA-Z]{5,12}$/,
  password: /^[\w@-]{8,20}$/,
};
const button = document.querySelector(".button");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

// validation function

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "succeed";
  } else {
    field.className = "failed";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

// Popup

button.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});
