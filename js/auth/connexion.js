const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnConnexion = document.getElementById("btnConnexion");

btnConnexion.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Il faudra appeler l'API pour vérifier les crédentials en BDD

    if(mailInput.value == "test@mail.com" && passwordInput.value == "Arcadia2024"){
        //Il faut récupérer le vrai token
        const token = "abcd";
        setToken(token);
        //Placer ce token en cookie

        setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}
