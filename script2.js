function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    var nome = document.getElementById('txtnome').value;
    var peso = parseFloat(document.getElementById('ipeso').value);
    
    var nalt = parseFloat(document.getElementById('nalt').value);
    var imc = peso / (nalt * nalt);
    var mensagemIMC = '';

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radiosex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';
        } else if (fsex[1].checked) {
            genero = 'Mulher';
        }

        if (imc <= 18.5) {
            mensagemIMC = 'Abaixo do Peso';
            img.setAttribute('src', genero === 'Homem' ? 'imagens/magro_homem.png' : 'imagens/magro_mulher.png');
        } else if (imc >= 18.6 && imc <= 24.9) {
            mensagemIMC = 'Peso ideal (Parabéns!)';
            img.setAttribute('src', genero === 'Homem' ? 'imagens/normal_homem.png' : 'imagens/normal_mulher.png');
        } else if (imc >= 25 && imc <= 29.9) {
            mensagemIMC = 'Levemente acima do Peso';
            img.setAttribute('src', genero === 'Homem' ? 'imagens/sobrepeso_masculino.png' : 'imagens/sobrepeso_mulher.png');
        } else if (imc >= 30.0 && imc <= 34.9) {
            mensagemIMC = 'Obesidade grau I';
            img.setAttribute('src', genero === 'Homem' ? 'imagens/obesidade_homem.png' : 'imagens/obesidade_mulher.png');
        } else if (imc >= 35 && imc <= 39.9) {
            mensagemIMC = 'Obesidade grau II';
            img.setAttribute('src', genero === 'Homem' ? 'imagens/obesidade_homem.png' : 'imagens/obesidade_mulher.png');
        } else  {
            mensagemIMC = 'Obesidade Morbida';
            img.setAttribute('src', genero === 'Homem' ? 'imagens/obesidademorbida_homem.png' : 'imagens/obesidademorbida_mulher.png');
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${nome}, ${genero} com ${idade} anos.<br/>Seu IMC é ${imc.toFixed(2)}. Você está ${mensagemIMC}.`;

        var divFoto = document.createElement('div');
        divFoto.setAttribute('class', 'foto-container');
        divFoto.appendChild(img);
        res.appendChild(divFoto);
    }
}

// Lógica para alternar entre tema claro e escuro
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao-tema');
    const body = document.body;

    // Função para aplicar o tema escuro
    function temaEscuro(tipo) {
        if (tipo === true) {
            body.classList.add('escuro');
            if (botao) {
                botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
            }
        } else {
            body.classList.remove('escuro');
            if (botao) {
                botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
        }
    }

    // Persistência do tema
    const temasalvo = localStorage.getItem('tema');
    if (temasalvo === 'escuro') {
        temaEscuro(true);
    }

    // Adiciona o evento de clique ao botão, se ele existir
    if (botao) {
        botao.addEventListener('click', () => {
            const isescuro = body.classList.toggle('escuro');
            temaEscuro(isescuro);
            localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
        });
    }
});