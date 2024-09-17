const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnConnexion = document.getElementById("btnConnexion");
const formConnexion = document.getElementById("connexionForm");

btnConnexion.addEventListener("click", checkCredentials);

function checkCredentials(){
    let dataForm = new FormData(formConnexion);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-AUTH-TOKEN", "••••••");

    let raw = JSON.stringify({
        "username": dataForm.get("email"),
        "password": dataForm.get("password"),
    });

    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(apiUrl+"login" , requestOptions)
        .then((response) => {
            if(response.ok){
                return response.json()
        }
            else{
                mailInput.classList.add("is-invalid");
                passwordInput.classList.add("is-invalid");
            }
        })
        .then(result =>{
            const token = result.apiToken;
            setToken(token);
            //Placer ce token en cookie

            setCookie(RoleCookieName, result.roles[0], 7);
            window.location.replace("/");
        })
        .catch((error) => console.log('error', error));
}
