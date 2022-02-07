const form = document.forms[1];
const elementsForm = form.elements;
//const valider = document.getElementById('valider')
const valider = elementsForm.valider;
const nom = elementsForm.nom;
const age = elementsForm.age;

/*

console.log(`valeur de la classe ${nom.className}`);
console.log(nom.classList); // Un tableau de type DomTokenList
*/


console.log(nom.validity)



// nom.classList.add('patrice')
// console.log(nom.classList);
// console.log(nom.classList.length)

const gestionForm = (event) => {
    event.preventDefault();

    let style = "border: 1px solid red;";
    if (nom.validity.valueMissing === true) {

      // document.getElementById('errorNom').innerHTML = "Nom Obligatoire!"
       document.getElementById('errorNom').innerHTML = nom.validationMessage;
       nom.classList.add('is-invalid')
      // nom.style = style
    }else{
        console.log('ooooo')
        nom.classList.add('was-validated');
        // nom.addEventListener('change', function (e) {
        //
        //     nom.classList.add('was-validated');
        //     console.log(nom)
        // })
    }
    if (age.validity.valueMissing) {
        document.getElementById('errorAge').innerHTML = "Age Obligatoire!";
        age.style = style;
        age.classList.add('entourInputEnRouge');
    }else if(age.validity.rangeOverflow) {
        document.getElementById('errorAge').innerHTML = "Trop grand";
        age.style = style
    }else{
        document.getElementById('errorAge').innerHTML = "Trop Petit";
        age.style = style
    }

}


valider.addEventListener('click', gestionForm);

