const pwlength = document.querySelector('#pwlength');
const value_range = document.getElementById('value_range');
let lv = 0;
const pw = document.getElementById('pw');

pwlength.addEventListener('input', () => {
    lv = parseInt(pwlength.value);
    lv = (lv < 10) ? ("0" + lv) : lv;
    value_range.innerText = lv;
})

const ucletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lcletters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const spc = '!@#$-%^&*()';
let pwextent = 0;

const uc = document.getElementById('uc');
const lc = document.getElementById('lc');
const num = document.getElementById('num');
const sp = document.getElementById('spc');

const generate = document.getElementsByTagName('button')[0];
generate.addEventListener('click', () => {
    let selectedchars = '';
    pwextent = value_range.innerText;
    if (pwextent < 8) { alert('Warning! The password must be at least 8 characters') }
    if (uc.checked) {
        selectedchars += ucletters;
    }
    if (lc.checked) {
        selectedchars += lcletters;
    }
    if (num.checked) {
        selectedchars += numbers;
    }
    if (sp.checked) {
        selectedchars += spc;
    }
    let shuffled = shuffle(selectedchars);
    if (pwextent >= 8 && selectedchars != '') {
        pw.value = generatepw(shuffled, pwextent);
    }
})


function shuffle(selectedchars) {
    let selectedcharsarr = selectedchars.split('');
    selectedcharsarr.sort(() => {
        return 0.5 - Math.random();
    });
    selectedcharsarr = selectedcharsarr.join('');
    return selectedcharsarr;
}

function generatepw(shuffled, pwextent) {
    let generatedpw = '';
    for (let i = 0; i < pwextent; i++) {
        let random = Math.floor(Math.random() * shuffled.length);
        generatedpw += shuffled[random];
    }
    return generatedpw;
}
