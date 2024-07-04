function ValidateEmail(input) {
    var validRegex =  "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
    if(input.value.match(validRegex)) {
        alert("Valid email address!");

        document.form.text.focus();

        return true;

    } else {
        alert("Invalid email address!");

        document.form.text.focus();

        return false;
    }
}

let contactForm = document.getElementById("formContatoID");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // let contact= document.getElementById('nome'); document.getElementById('email'); document.getElementById('assunto'); document.getElementById('mensagem');
    let contactName = document.getElementById('nome');
    let contactEmail = document.getElementById('email');
    let contactAssunto = document.getElementById('assunto');
    let contactMensagem = document.getElementById('mensagem');

    // if (contact.contactName.value == "")
    if (contactName.value == "" || contactEmail.value == "" || contactAssunto.value == "" || contactMensagem.value == "") {
        alert("Certifique-se se preencheu todos os campos");
    } else {
        alert("Seu contato foi enviado!");

        // contact.value = "";
        contactName = "";
        contactEmail = "";
        contactAssunto = "";
        contactMensagem = "";
    }

});


