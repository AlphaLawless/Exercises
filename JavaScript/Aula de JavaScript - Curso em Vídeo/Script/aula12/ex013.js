//pegando hora do seu Operacional System
var agora = new Date()
var hora = parseFloat(agora.getDate())
/* Cuidado pois, esse comando ele pode pegar tanto do Cliente
   quanto do servidor. Então esteja atento */

console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
}else {
    if (hora <= 18) {
        console.log('Boa Tarde!')
    }else {
        if (hora < 5 && hora > 1) {
            console.log('Boa madrugada')
        }else {
            console.log('Boa noite')
        }
    }
}