const form = document.querySelector(".contact__form");

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    const firstNameValue = document.getElementById("fname").value;
    const lastNameValue = document.getElementById("lname").value;
    const eMailValue = document.getElementById("eMail").value;
    const subjectValue = document.getElementById("sject").value;
    const messageValue = document.getElementById("message").value;

    validateForm(firstNameValue, lastNameValue, eMailValue, subjectValue, messageValue);
});

const sendContactMail = (name, surname, email, subject, message)=>{

    fetch("https://formsubmit.co/ajax/info@estudiomateria.com.ar", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Nombre :  `${name}`,
            Apellido :  `${surname}`,
            eMail:  `${email}`,
            Asunto: `${subject}`,
            Mensaje:  `${message}`,
        })
    })
        .then(response => {

            alert("El mensaje se ha enviado correctamente")
            
            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("eMail").value = "";
            document.getElementById("sject").value = "";
            document.getElementById("message").value = "";

        })
        .catch(error => {
            console.log(error);
            alert("No se pudo enviar el mensaje, reenvie nuevamente el mensaje.")
        });
}
// response.json() -> 1er then
const validateForm = (name, surname, email, subject, message) =>{

    if (name == null || name == undefined || name.split(" ").join("") == "" ||
        surname == null || surname == undefined || surname.split(" ").join("") == "" ||
        email == null || email == undefined || email.split(" ").join("") == "" ||
        subject == null || subject == undefined || subject.split(" ").join("") == "" ||
        message == null || message == undefined || message.split(" ").join("") == "" ){

            alert("Verifique que todos los campos se hayan completado.");

        } else {

            sendContactMail(name, surname, email, subject, message);

        }
}

