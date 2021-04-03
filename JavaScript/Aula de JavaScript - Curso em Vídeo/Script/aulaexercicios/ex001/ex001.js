function carregar() {
  let msg = document.querySelector('#msg')
  let img = document.querySelector('#image')
  let data = new Date()
  //Var Horas e Minutos
  let hora = data.toLocaleTimeString()
  
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    //Bom dia!
    img.scr = 'assets/images/morning250.png'
    document.body.style.background = '#ebbb8a'
  } else if (hora >= 12 && hora <= 18) {
    //Boa Tarde!
    img.src = 'assets/images/afternoon250.png'
    document.body.style.background = '#ff8a07'
  } else {
    //Boa Noite!
    img.src = 'assets/images/evening250.png'
    document.body.style.background = '#515154'
  }
}