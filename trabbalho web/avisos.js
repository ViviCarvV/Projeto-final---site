const nomeInput = document.querySelector("#nome");
const telefoneInput = document.querySelector("#telefone");
const emailInput = document.querySelector("#email");


function clearInputs() {
    nomeInput.value = "";
    telefoneInput.value = "";
    emailInput.value = "";
}

function formulario(){
    const nome = nomeInput.value.trim();
    const telefone = telefoneInput.value.trim();
    const email = emailInput.value.trim();

    if (nome === "" || telefone === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    alert("Adoção concluida,aguarde um email!");
   
    clearInputs();
}

