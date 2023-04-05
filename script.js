const form = document.querySelector('form');
const fieldsets = form.querySelectorAll('form > fieldset');

const wafs = document.getElementById("wafsbtn")
const cssttr = document.getElementById("cssttrbtn")
const pwa = document.getElementById("pwabtn")
const bt = document.getElementById("btbtn")
const rtw = document.getElementById("rtwbtn")
const hcd = document.getElementById("hcdbtn")

const backbtn = document.querySelector('#back');
const forwardbtn = document.querySelector('#forward');

let currentFieldsetIndex = 0;

function showFieldset(index) {
    fieldsets.forEach((fieldset, i) => {
        if (i === index) {
            fieldset.style.display = 'block';
        } else {
            fieldset.style.display = 'none';
        }
    });
}

showFieldset(currentFieldsetIndex);

document.querySelector('#back').addEventListener('click', () => {
    currentFieldsetIndex--;
    if (currentFieldsetIndex < 0) {
        currentFieldsetIndex = 0;
    }
    showFieldset(currentFieldsetIndex);
    setHash(currentFieldsetIndex);
});

document.querySelector('#forward').addEventListener('click', () => {
    currentFieldsetIndex++;
    if (currentFieldsetIndex > fieldsets.length - 1) {
        currentFieldsetIndex = fieldsets.length - 1;
    }
    showFieldset(currentFieldsetIndex);
    setHash(currentFieldsetIndex);
});

wafs.addEventListener("click", () => {
    currentFieldsetIndex = 1;
    showFieldset(currentFieldsetIndex);
    setHash(currentFieldsetIndex);
});

cssttr.addEventListener("click", () => {
    currentFieldsetIndex = 2;
    showFieldset(currentFieldsetIndex);
    setHash(currentFieldsetIndex);
    window.scrollTo(0,0);
});
  
pwa.addEventListener("click", () => {
    currentFieldsetIndex = 3;
    showFieldset(currentFieldsetIndex);
    setHash(currentFieldsetIndex);
    window.scrollTo(0,0);
});

bt.addEventListener("click", () => {
    currentFieldsetIndex = 4;
    showFieldset(currentFieldsetIndex);
    setHash(currentFieldsetIndex);
    window.scrollTo(0,0);
});

rtw.addEventListener("click", () => {
    currentFieldsetIndex = 5;
    showFieldset(currentFieldsetIndex);
    setHash(currentFieldsetIndex);
    window.scrollTo(0,0);
});

hcd.addEventListener("click", () => {
    currentFieldsetIndex = 6;
    showFieldset(currentFieldsetIndex);
    setHash(currentFieldsetIndex);
    window.scrollTo(0,0);
});

backbtn.addEventListener("click", () => {
    window.scrollTo(0,0);
})

forwardbtn.addEventListener("click", () => {
    window.scrollTo(0,0);
})

function setHash(index) {
    switch (index) {
        case 1:
            window.location.hash = 'wafs';
            break;
        case 2:
            window.location.hash = 'cssttr';
            break;
        case 3:
            window.location.hash = 'pwa';
            break;
        case 4:
            window.location.hash = 'bt';
            break;
        case 5:
            window.location.hash = 'rtw';
            break;
        case 6:
            window.location.hash = 'hcd';
            break;
        default:
            window.location.hash = '';
            break;
    }
}





const nameInput = document.querySelector('#naam');
const studentInput = document.querySelector('#Studentnummer');
const emailInput = document.querySelector('#email');

// Load form data from local storage:
nameInput.value = localStorage.getItem('naam') || '';
studentInput.value = localStorage.getItem('Studentnummer') || '';
emailInput.value = localStorage.getItem('email') || '';

// Save form data to local storage when input changes:
nameInput.addEventListener('input', () => {
  localStorage.setItem('naam', nameInput.value);
});

studentInput.addEventListener('input', () => {
  localStorage.setItem('Studentnummer', studentInput.value);
});

emailInput.addEventListener('input', () => {
  localStorage.setItem('email', emailInput.value);
});

// Save form data to local storage when the form is submitted:
form.addEventListener('submit', (event) => {
  event.preventDefault();

  localStorage.setItem('naam', nameInput.value);
  localStorage.setItem('Studentnummer', studentInput.value);
  localStorage.setItem('email', emailInput.value);
});




