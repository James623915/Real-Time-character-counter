const textareaEl = document.getElementById('textarea');

const totalCounterEl = document.getElementById('total-counter');

const remainingCounterEl = document.getElementById('remaining-counter');

textareaEl.addEventListener('keyup', () => {
  updateCounter();
});

//call the function here to get the total character 0 when user starts the app.
updateCounter();

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;

  remainingCounterEl.innerText =
    textareaEl.getAttribute('maxLength') - textareaEl.value.length;
}
