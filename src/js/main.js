// importing modules
import './../scss/main.scss';
import {getCheckedValue} from './form'
import modal from './modal';

// getting the form element
const sizeForm = document.querySelector('#size-form');

// adding event to form buttons
sizeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const selectedSize = getCheckedValue('size');
    modal(selectedSize);
});
