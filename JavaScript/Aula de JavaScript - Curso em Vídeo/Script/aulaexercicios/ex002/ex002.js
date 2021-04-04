function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let formularioAno = document.querySelector('#txtano')
  let res = document.querySelector('#res')

  //Caso não tenha resultado
  if (formularioAno.value.length == 0 || formularioAno.value > ano) {
    alert('[ERRO] Verifique os dados novamente!')
  } else {
    let formularioSexo = document.getElementsByName('radsex')
    let idade = ano - Number(formularioAno.value)
    let genero = ''
    
    //Colocando imagens no HTML usando JavaScript
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(formularioSexo[0].checked) {
      genero = 'Homem'
      if(idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'assets/images/boykid250.png')
      }else if (idade <= 21) {
        //jovem
        img.setAttribute('src', 'assets/images/Youngman250.png')
      }else if (idade >= 22 && idade < 50) {
        //adulto
        img.setAttribute('src', 'assets/images/man250.png')
      } else {
        //idoso
        img.setAttribute('src', 'assets/images/oldman250.png')
      }
    } else {
      genero = 'Mulher'
      if(idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'assets/images/girlkid250.png')
      }else if (idade <= 21) {
        //jovem
        img.setAttribute('src', 'assets/images/Youngwoman250.png')
      }else if (idade >= 22 && idade < 50) {
        //adulto
        img.setAttribute('src', 'assets/images/woman250.png')
      } else {
        //idoso
        img.setAttribute('src', 'assets/images/oldwoman250.png')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}