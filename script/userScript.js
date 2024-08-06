
// var typeUser = 1 //USUÁRIO
var typeUser = 0 //EMPRESA   

var fezLogin = true; //LOGADO
// var fezLogin = false;  //NÃO LOGADO

function onPageLoad() {

    console.log("fez login");

    if (fezLogin) {
        //  FEZ LOGIN
        document.getElementById("login").style.display = 'none';
        document.getElementById("user").style.display = 'block';
    } else {
        document.getElementById("user").style.display = 'none';
        document.getElementById("login").style.display = 'block';
    }

    if (fezLogin) {
        if (typeUser === 0) {
            document.getElementById("cadVagaLink").href = 'forms.html';
        }
        else (typeUser === 1)
        {
            document.getElementById("aplyVagaLink").href = 'aplicarvaga.html';
        }
    }
}