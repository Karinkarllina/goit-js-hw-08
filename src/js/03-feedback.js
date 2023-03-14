import throttle from 'lodash.throttle';


const formKey = "feedback-form-state";


const formEl = document.querySelector('.feedback-form')
const emailEl = document.querySelector('.feedback-form input');
const inputEl = document.querySelector('.feedback-form textarea');



formEl.addEventListener('input', throttle(onTextareaInput, 500));

formEl.addEventListener('submit', onFormSubmit);


populateTextarea(); 

function onTextareaInput(event) {
    let formData = {
    email: emailEl.value,
    message: inputEl.value,
    };
    localStorage.setItem('formKey', JSON.stringify(formData));
};



function onFormSubmit(event) {
    event.preventDefault();

    const {
    elements: { email, message }
    } = event.currentTarget;

    console.log({ email: email.value, message: message.value });
    event.currentTarget.reset();
};




function populateTextarea() {

const savedMessage = JSON.parse(localStorage.getItem("formKey"));
    
    
    if (savedMessage) {
        emailEl.value = savedMessage.email;
        inputEl.value = savedMessage.message;
    }

} 

