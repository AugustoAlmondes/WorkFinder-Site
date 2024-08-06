var botScroll = document.querySelectorAll(".botao-carrossel .button_cx");
for (var x = 0; x < botScroll.length; x++) {
    (function (x) {
        botScroll[x].onclick = function () {
            moveScroll(x, cxAtiva().box_ativo, cxAtiva().img_width);
        }
    })(x);
}

function cxAtiva() {
    var ele = document.querySelectorAll(".conteudocaixas");
    for (var x = 0; x < ele.length; x++) {
        if (ele[x].parentNode.style.display == "block") break;
    }

    return {
        box_ativo: x, // retorna a galeria visível (ativa)
        img_width: ele[x].querySelector("img").offsetWidth // retorna a largura das imagens
    }
}

function moveScroll(idx, cca, wid) {
    var ele = document.querySelectorAll(".conteudocaixas");
    var ccs = ele[cca];
    var ccs_s = ccs.scrollLeft;
    // idx == 1 significa que segundo botão foi clicado (para a direita)
    scrollSuave(ccs_s, idx == 1 ? wid + ccs_s : ccs_s - wid, 0, ccs);
}


document.getElementById("contract-type").addEventListener("change", function () {
    var activateContract = document.getElementById("contract-type").value;
    var otherContract = document.getElementById("other-contract-type");

    if (activateContract === "other") {
        otherContract.style.display = 'block';
    } else {
        otherContract.style.display = 'none';
    }
});

document.getElementById("noSalary").addEventListener("change", function () {
    var noConfirm = document.getElementById("noSalary");
    var salInput = document.getElementById("salary");

    if (noConfirm.checked) {
        salInput.setAttribute('disabled', 'disabled');
    }
})

document.getElementById("yesSalary").addEventListener("change", function () {
    var noConfirm = document.getElementById("yesSalary");
    var salInput = document.getElementById("salary");

    if (noConfirm.checked) {
        salInput.removeAttribute('disabled');
    }
})

document.getElementById('contract-type').addEventListener('change', function () {
    const otherContractInput = document.getElementById('other-contract-type');
    if (this.value === 'other') {
        otherContractInput.style.display = 'block';
    } else {
        otherContractInput.style.display = 'none';
    }
});

document.getElementById('yesDriver').addEventListener('change', function () {
    const licenseTypeSelect = document.getElementById('license-type');
    licenseTypeSelect.disabled = !this.checked;
});

document.getElementById('noDriver').addEventListener('change', function () {
    const licenseTypeSelect = document.getElementById('license-type');
    licenseTypeSelect.disabled = this.checked;
});

function mascaraFone(event) {
    var valor = document.getElementById("telefone").attributes[0].ownerElement['value'];
    var retorno = valor.replace(/\D/g, "");
    retorno = retorno.replace(/^0/, "");
    if (retorno.length > 10) {
        retorno = retorno.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (retorno.length > 5) {
        if (retorno.length == 6 && event.code == "Backspace") {
            // necessário pois senão o "-" fica sempre voltando ao dar backspace
            return;
        }
        retorno = retorno.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (retorno.length > 2) {
        retorno = retorno.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        if (retorno.length != 0) {
            retorno = retorno.replace(/^(\d*)/, "($1");
        }
    }
    document.getElementById("telefone").attributes[0].ownerElement['value'] = retorno;
}

document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById('typing-text');
    const text = typingText.innerHTML;
    typingText.innerHTML = '';

    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});

function sobreScroll() {
    let sobreId = document.getElementById("sobreId")
    sobreId.scrollIntoView({
        behavior: "smooth"
    });
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.getElementById('confirmar_user').addEventListener('click', function () {

    let inputs = document.getElementsByTagName('input');
    
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = ''
    };
})