console.log('Validation 2')









// 1 - Recuperation du formulaire et de ses elements
const form = document.forms[1];
const elementsForm = form.elements;
const nom = elementsForm.nom;
const valider = elementsForm.valider;
valider.disabled = true; // Desactiver au lancement du formulaire

//const isRequired = (value) => value === '' ? false : true;
const isRequired = (value) => value !== '';

/*const estObligatoire = (value) => {
    if (value === '') {
        return false;
    }else {
        return true;
    }
}*/

const estObligatoire = (value) => {
    return value !== '';
}


/**
 * Permet d'afficher les erreurs sur les champs du formulaire
 * @param input le champ recuperer
 * @param message le message d'erreur a afficher
 */
const showError = (input, message) => {
    // console.log(parentElement)
    const parentElement = input.parentElement; // recupere la div parente
    input.classList.remove('is-valid'); // suppression de la class is-valid
    input.classList.add('is-invalid'); // ajout de la class is-invalid
    const divError = parentElement.querySelector('.invalid-feedback'); // recuperation de div d'erreur
    divError.textContent = message; // Affichage du message d'erreur
}

/**
 * Permet d'afficher les succes sur les champs du formulaire
 * @param input le champ recuperer
 */
const showSuccess = (input) => {
    const parentElement = input.parentElement;
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    const divError = parentElement.querySelector('.invalid-feedback');
    divError.textContent = '';
}

/**
 * Permet de valider le champ du nom
 * @returns {boolean} true si le champ est valide
 */
const checkNom = () => {
  //  console.log('Check nom');
    let valid = false;
    const valeurNom = nom.value.trim();
    //const valeurNom = nom.value;

    document.querySelector('#display-nom').textContent = valeurNom;

    if(!isRequired(valeurNom)) {
        showError(nom, 'Nom est obligatoire!');
       // document.getElementById('errorNom').innerHTML = 'Nom obligatoire!!!'
    }else {
        showSuccess(nom);
        valid = true;
       // console.log('Le champ nest plus vide!')
    }
    return valid;
}

/**
 * Permet de valider le champ du message
 * @returns {boolean} true si le champ est valide
 */
const checkMessage = () => {
    let valid = false;
    const valeurMessage = message.value.trim();
    if(!isRequired(valeurMessage)) {
        showError(message, 'Message est obligatoire!');
    }else {
        showSuccess(message);
        valid = true;
    }
    return valid;
}

/**
 * Permet de valider le champ d'age
 * @returns {boolean} true si l'age est valide
 */
const checkAge = () => {
    let valid = false;
    const valeurAge = age.value.trim();

    const min = 18;
    const max = 50;

    if(!isRequired(valeurAge)) {
        showError(age, 'Age est obligatoire!');
        // document.getElementById('errorNom').innerHTML = 'Nom obligatoire!!!'
    }else if(valeurAge < min) {
        showError(age, `${valeurAge} est inferieur a la valeur minimale requise ${min}`);
    } else if (valeurAge > max) {
        showError(age, `${valeurAge} est superieur a la valeur maximal requise ${max}`);
    }
    else {
        showSuccess(age);
        valid = true;
        console.log('Le champ nest plus vide!')
    }
    return valid;
}


/*const add = (a, b) => a + b;

let r = add(8, 9)
console.log(add(8, 9))
console.log(r)

console.log(2 ** 3)

console.log(Math.pow(2, 3))*/

// 2 - Attacher un gestion d'evenement au formulaire
form.addEventListener('submit', function (e) {
    // 3 - Empecher la soumission du formulaire
    e.preventDefault();

    // Validation du formulaire
    let isNomValid = checkNom();
    let isMessageValid = checkMessage();
    let isAgeValid = checkAge();


    let isFormValid = isNomValid && isMessageValid && isAgeValid;

    console.log(isFormValid)

    if (isFormValid) {
        // Emvoyer les donnees au serveur
        console.log('Clik pour prendre les data!!!')
        // Todo : 1 - Desactiver le bouton valider des le premier click
        // Todo : 2 - Afficher une modale de confirmation d'enregistrer apres clique sur le bouton
        console.log(nom.value)
    }else {
        console.log('Formulaire non valide!')
    }

})

form.addEventListener('input', function (e) {
   // console.log(e.target.id)
    switch (e.target.id) {
        case 'nom':
            checkNom();
            break;
        case 'message':
            checkMessage();
            break;
        case 'age':
            checkAge();
            break;
        default:
            console.log('Ici le form est valide!');
            break;

    }
})

form.addEventListener('keyup', function (e) {
    // Validation du formulaire
    let isNomValid = checkNom();
    let isMessageValid = checkMessage();
    let isAgeValid = checkAge();
    let isFormValid = isNomValid && isMessageValid && isAgeValid;
    valider.disabled = !isFormValid;
})

