const formData = { email: '', message: '' };
const key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
console.log(form);

const emailInput = form.elements.email;
const messageInput = form.elements.message;

form.addEventListener('input', formInput);
form.addEventListener('submit', formSubmit);

populateText();

function populateText() {
  const inputText = localStorage.getItem(key);
  if (inputText) {
    const parseInputText = JSON.parse(inputText);
    formData.email = parseInputText.email || '';
    formData.message = parseInputText.message || '';

    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

function formInput(event) {
  if (emailInput.name === 'email' || emailInput.name === 'message') {
    formData[event.target.name] = event.target.value;

    localStorage.setItem(key, JSON.stringify(formData));
  }
}

function formSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  event.currentTarget.reset();
  localStorage.removeItem(key);
  formData.email = '';
  formData.message = '';
}
