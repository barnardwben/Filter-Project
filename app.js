let brkf = document.getElementsByClassName('brkf');
let lnch = document.querySelectorAll('.lnch');
let dnr = document.querySelectorAll('.dnr');

let allBtn = document.querySelector('.allBtn');
let brkfBtn = document.querySelector('.brkfBtn');
let lnchBtn = document.querySelector('.lnchBtn');
let dnrBtn = document.querySelector('.dnrBtn');


allBtn.addEventListener('click', allMenu);
brkfBtn.addEventListener('click', brkfMenu);
lnchBtn.addEventListener('click', lnchMenu);
dnrBtn.addEventListener('click', dnrMenu);

function allMenu() {
  for (let i = 0; i < brkf.length; i++) {
    brkf[i].style.display = 'inline';
  }
  for (let i = 0; i < lnch.length; i++) {
    lnch[i].style.display = 'inline';
  }
  for (let i = 0; i < dnr.length; i++) {
    dnr[i].style.display = 'inline';
  }
}
function brkfMenu() {
  for (let i = 0; i < brkf.length; i++) {
    brkf[i].style.display = 'inline';
  }
  for (let i = 0; i < lnch.length; i++) {
    lnch[i].style.display = 'none';
  }
  for (let i = 0; i < dnr.length; i++) {
    dnr[i].style.display = 'none';
  }
}
function lnchMenu() {
  for (let i = 0; i < brkf.length; i++) {
    brkf[i].style.display = 'none';
  }
  for (let i = 0; i < lnch.length; i++) {
    lnch[i].style.display = 'inline';
  }
  for (let i = 0; i < dnr.length; i++) {
    dnr[i].style.display = 'none';
  }
}
function dnrMenu() {
  for (let i = 0; i < brkf.length; i++) {
    brkf[i].style.display = 'none';
  }
  for (let i = 0; i < lnch.length; i++) {
    lnch[i].style.display = 'none';
  }
  for (let i = 0; i < dnr.length; i++) {
    dnr[i].style.display = 'inline';
  }
}