const btnSD = document.querySelector('#btn_sd');
const checkBoxSD = document.querySelector('#checkBox_sd');




console.log(checkBoxSD)

function unCheckAllCheckbox() {
    check(false);
    this.onclick = checkAllCheckbox;
}

/**
 * Permet de parcourir et selectionner/des tous les checkbox du tableau
 * @param checked
 */
function check(checked = true) {
    const checkBoxs = document.querySelectorAll('input[name="user"]');
    checkBoxs.forEach((checkBox) => {
        checkBox.checked = checked;
        console.log(checkBox);
    })
}

function checkAllCheckbox() {
    // console.log(this) // Fais reference au boutoon
     check();
     this.onclick = unCheckAllCheckbox;
}


// const checkAllCheckboxImportant = () => {
//     console.log(this)
//     console.log('selection')
// }


btnSD.onclick = checkAllCheckbox;

checkBoxSD.onclick = checkAllCheckbox;