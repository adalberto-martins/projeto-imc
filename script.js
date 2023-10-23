function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var nome = document.getElementById('txtnome').value
    var peso = parseFloat(document.getElementById('ipeso').value)
    var nalt = parseFloat(document.getElementById('nalt').value)
    var imc = peso / (nalt * nalt)
    var mensagemIMC = ''

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }

        if (imc < 18.5) {
            mensagemIMC = 'Abaixo do Peso'
            img.setAttribute('src', genero === 'Homem' ? 'imagens/magro_homem.png' : 'imagens/magro_mulher.png')
            alert('Abaixo do Peso')
        } else if (imc < 24.9) {
            mensagemIMC = 'Peso ideal (Parabéns!)'
            img.setAttribute('src', genero === 'Homem' ? 'imagens/normal_homem.png' : 'imagens/normal_mulher.png')
            alert('Peso ideal (Parabéns!)')
        } else if (imc < 29.9) {
            mensagemIMC = 'Levemente acima do Peso';
            img.setAttribute('src', genero === 'Homem' ? 'imagens/sobrepeso_masculino.png' : 'imagens/sobrepeso_mulher.png')
            alert('Levemente acima do Peso')
        } else if (imc < 34.9) {
            mensagemIMC = 'Obesidade';
            img.setAttribute('src', genero === 'Homem' ? 'imagens/obesidade_homem.png' : 'imagens/obesidade_mulher.png')
            alert('Obesidade')
        } else {
            mensagemIMC = 'Obesidade Morbida';
            img.setAttribute('src', genero === 'Homem' ? 'imagens/obesidademorbida_homem.png' : 'imagens/obesidademorbida_mulher.png')
            alert('Obesidade Morbida')
        }

        res.style.textAlign = 'center'
        res.innerHTML = `${nome} Detectamos ${genero} com ${idade} anos. Está ${mensagemIMC}`
        res.appendChild(img)
    }
}
