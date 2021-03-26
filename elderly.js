const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
});




var btnPopup = document.getElementById('boutonPopup');
var overlay = document.getElementById('overlay');
//var btnClose = document.getElementById('btnClose');

btnPopup.addEventListener('click',openModal);

btnClose.addEventListener('click',closeModal);




function openModal(){

    overlay.style.display = 'block';


}

function closeModal(){

    overlay.style.display = 'none';


}





var btnPopup2 = document.getElementById('boutonPopup2');
var overlay2 = document.getElementById('overlay2');
//var btnClose = document.getElementById('btnClose2');

btnPopup2.addEventListener('click',openModal);

btnClose2.addEventListener('click',closeModal);




function openModal(){

   overlay.style.display = 'block';


}

function closeModal(){

   overlay.style.display = 'none';


}


