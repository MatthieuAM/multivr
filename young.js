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
//var btnClose2 = document.getElementById('btnClose2');

btnPopup2.addEventListener('click',openModal);

btnClose2.addEventListener('click',closeModal);




function openModal(){

   overlay2.style.display = 'block';


}

function closeModal(){

   overlay2.style.display = 'none';


}



var btnPopup3 = document.getElementById('boutonPopup3');
var overlay3 = document.getElementById('overlay3');
//var btnClose = document.getElementById('btnClose2');

btnPopup3.addEventListener('click',openModal);

btnClose3.addEventListener('click',closeModal);




function openModal(){

   overlay3.style.display = 'block';


}

function closeModal(){

   overlay3.style.display = 'none';


}





//var formValid = document.getElementById("boutonEnvoyer");
//var prenom = document.getElementById("name");
//var missPrenom = document.getElementById("missPrenom");

//formValid.addEventListener('click', validation);

//function validation(event){



//if (prenom.validity.valuemissing){
///event.preventDefault();
//missPrenom.textContent = 'Prénom manquant';
//missPrenom.style.color = 'red'






