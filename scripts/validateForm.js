'use strict';

const form = document.querySelector('.form');
const collectionInputs = document.querySelectorAll('.form__input');
const inputs = Object.values(collectionInputs);
const hideWrapper = document.querySelector('.hide-wrapper');
const textBtn = document.querySelector('.btn-text');
const loadedBtn = document.querySelector('.loaded');
const greatBox = document.querySelector('.great-box');
const greatBoxBtn = document.querySelector('.great-box__btn');

const select = document.querySelector('.select');
const selectSelected = document.querySelector('.select-selected');
const customSelect = document.querySelector('.custom-select');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const handleForm = handleValidationForm();
  const checkHandleForm = handleForm.every(item => item === true);
  const checkSelect = select.value === '';

  selectValidate();

  if (!checkHandleForm || checkSelect) {
    return false;
  } else {
    successfulUploadForm();
  }
}, false);

initialStateForm();

function selectValidate() {
  if (select.value === '') {
    selectSelected.classList.add('error');
    customSelect.firstElementChild.classList.remove('hide-error');
  } else {
    selectSelected.classList.remove('error');
    customSelect.firstElementChild.classList.add('hide-error');
  }
}

function handleValidationForm() {
  const patternText = /[A-Za-z -]/g;
  const patternNum = /^((0|0)+([0-9]){9})$/g;
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

      default:
        input.parentElement.classList.remove('error');
        input.previousElementSibling.classList.add('hide-error');
    }
  });
}

function successfulUploadForm() {
  const optionsSelectDefault = '<option value="">Work opportunities</option>';

  hideWrapper.classList.add('hidden-wrapper');
  textBtn.classList.add('hide-btn-elem');
  loadedBtn.classList.remove('hide-btn-elem');

  setTimeout(() =>
    greatBox.classList.remove('hide-great-box'), 1500);

  // eslint-disable-next-line no-return-assign
  inputs.map(input => input.value = '');

  selectSelected.innerHTML = optionsSelectDefault;
}

function initialStateForm() {
  greatBoxBtn.addEventListener('click', () => {
    greatBox.classList.add('hide-great-box');
    hideWrapper.classList.remove('hidden-wrapper');
    textBtn.classList.remove('hide-btn-elem');
    loadedBtn.classList.add('hide-btn-elem');
  });
}
