
const showNom = document.getElementById('showNom');
const showMessage = document.getElementById('showMessage');
const showSexe = document.getElementById('showSexe');
const form = document.forms[1]; // Recuperation du formulaire
const elementsForms = form.elements; // Recuperation de tous les elements du formulaire

let valider = elementsForms.valider;
const nom = elementsForms.nom;
const message = elementsForms.message;
const sexes = elementsForms.sexe;


const getData = (e) => {
   e.preventDefault();

    // forof
    for (const sexe of sexes) {
       if (sexe.checked) showSexe.innerHTML = sexe.value;
    }
    // for (let i = 0; i < sexes.length; i++) {
    //     if (sexes[i].checked) showSexe.innerHTML = sexes[i].value;
    // }
    showNom.innerHTML = nom.value;
    showMessage.innerHTML = message.value;

}
// Gestion du formulaire
const handleForm = () => {
    valider.addEventListener('click', getData);
}

// 1 - Quand le DOM est charger
window.addEventListener('load', handleForm);
