// Напиши скрипт, який під час набору тексту в інпуті input#name-input
// (подія input) підставляє його поточне значення в span#name-output
// як ім’я для привітання. Обов’язково очищай значення в інпуті по краях
// від пробілів . Якщо інпут порожній або містить лише пробіли,
// то замість імені у спан має підставлятися рядок "Anonymous".

// На що буде звертати увагу ментор при перевірці:

// На елементі input#name-input прослуховується подія input
// Під час набору тексту в інпуті його поточне значення підставляється
// в span#name-output як ім’я для привітання
// Значення в інпуті очищене від пробілів по краях
// Якщо інпут порожній або містить лише пробіли, то замість імені
// у спан має підставлятися рядок "Anonymous"

//Нормальний Варіант:

const formInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

formInput.addEventListener("input", (evt) => {
    const userName = evt.currentTarget.value.trim();
    if (userName == "" || userName.startsWith(" ")) {
        output.textContent = "Anonymous";
    } else {
        output.textContent = userName;
    }
});

//Душніла мод:

// document.querySelector("#name-input")
//     .addEventListener("input", (evt) => {
//         evt.currentTarget.value.trim() == "" || evt.currentTarget.value.trim().startsWith(" ")
//             ? document.querySelector("#name-output").textContent = "Anonymous"
//             : document.querySelector("#name-output").textContent = evt.currentTarget.value.trim();
// });

formInput.addEventListener("focus", () => { 
    formInput.value = '';
});

formInput.addEventListener("blur", () => { 
    formInput.value = 'Please enter your name';
});

