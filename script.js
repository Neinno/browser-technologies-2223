const form = document.querySelector('form');
const fieldsets = form.querySelectorAll('form > fieldset');

const wafs = document.getElementById("wafsbtn")
const cssttr = document.getElementById("cssttrbtn")
const pwa = document.getElementById("pwabtn")
const bt = document.getElementById("btbtn")
const rtw = document.getElementById("rtwbtn")
const hcd = document.getElementById("hcdbtn")

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
});

document.querySelector('#forward').addEventListener('click', () => {
    currentFieldsetIndex++;
    if (currentFieldsetIndex > fieldsets.length - 1) {
        currentFieldsetIndex = fieldsets.length - 1;
    }
    showFieldset(currentFieldsetIndex);
});

wafs.addEventListener("click", () => {
    currentFieldsetIndex = 1;
    showFieldset(currentFieldsetIndex);
});

cssttr.addEventListener("click", () => {
    currentFieldsetIndex = 2;
    showFieldset(currentFieldsetIndex);
    window.scrollTo(0,0);
});
  
pwa.addEventListener("click", () => {
    currentFieldsetIndex = 3;
    showFieldset(currentFieldsetIndex);
    window.scrollTo(0,0);
});

bt.addEventListener("click", () => {
    currentFieldsetIndex = 4;
    showFieldset(currentFieldsetIndex);
    window.scrollTo(0,0);
});

rtw.addEventListener("click", () => {
    currentFieldsetIndex = 5;
    showFieldset(currentFieldsetIndex);
    window.scrollTo(0,0);
});

hcd.addEventListener("click", () => {
    currentFieldsetIndex = 6;
    showFieldset(currentFieldsetIndex);
    window.scrollTo(0,0);
});