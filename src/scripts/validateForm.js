'use strict';

const form = document.querySelector('.form');
const collectionInputs = document.querySelectorAll('.form__input');
const inputs = Object.values(collectionInputs);
const hideWrapper = document.querySelector('.hide-wrapper');
const textBtn = document.querySelector('.btn-text');
const loadedBtn = document.querySelector('.loaded');
const greatBox = document.querySelector('.great-box');
const greatBoxBtn = document.querySelector('.great-box__btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const handleForm = handleValidationForm();

  if (handleForm.every(item => item === true)) {
    successfulUploadForm();
  }
}, false);

initialStateForm();

function handleValidationForm() {
  const patternText = /[A-Za-z -]/g;
  const patternNum = /[0-9]/g;
  const patternEmail = /\S+@\S+\.\S+/g;

  return inputs.map(input => {
    const getNameInput = input.getAttribute('name');
    const inputValue = input.value;

    switch (getNameInput) {
      case 'text':
        if (!patternText.test(inputValue) || inputValue === '') {
          input.parentElement.classList.add('error');
          input.previousElementSibling.classList.remove('hide-error');
        } else {
          input.parentElement.classList.remove('error');
          input.previousElementSibling.classList.add('hide-error');

          return true;
        }
        break;

      case 'number':
        if (!patternNum.test(inputValue) || inputValue === '') {
          input.parentElement.classList.add('error');
          input.previousElementSibling.classList.remove('hide-error');
        } else {
          input.parentElement.classList.remove('error');
          input.previousElementSibling.classList.add('hide-error');

          return true;
        }
        break;

      case 'email':
        if (!patternEmail.test(inputValue) || inputValue === '') {
          input.parentElement.classList.add('error');
          input.previousElementSibling.classList.remove('hide-error');
        } else {
          input.parentElement.classList.remove('error');
          input.previousElementSibling.classList.add('hide-error');

          return true;
        }
        break;
    }
  });
}

function successfulUploadForm() {
  hideWrapper.classList.add('hidden-wrapper');
  textBtn.classList.add('hide-btn-elem');
  loadedBtn.classList.remove('hide-btn-elem');

  setTimeout(() =>
    greatBox.classList.remove('hide-great-box'), 1000);

  // eslint-disable-next-line no-return-assign
  inputs.map(input => input.value = '');
}

function initialStateForm() {
  greatBoxBtn.addEventListener('click', () => {
    greatBox.classList.add('hide-great-box');
    hideWrapper.classList.remove('hidden-wrapper');
    textBtn.classList.remove('hide-btn-elem');
    loadedBtn.classList.add('hide-btn-elem');
  });
}