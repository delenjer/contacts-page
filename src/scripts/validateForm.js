'use strict';

const form = document.querySelector('.form');
const collectionsInputs = document.querySelectorAll('.form__input');
// const formList = document.querySelectorAll('.form__list');
// const activeError = document.querySelector('.error__active');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputs = Object.values(collectionsInputs);
  const patternText = /[A-Za-z -]/g;
  const patternNum = /[0-9]/g;
  const patternEmail = /\S+@\S+\.\S+/g;

  const s = inputs.map(input => {
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

  if (s.every(item => item === true)) {
    // console.log('Congratulations');
    //
    // inputs.map(input => input.value = '');
  }
}, false);
