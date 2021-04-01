//Vai calcular os dias da semana

var now = new Date()
var weekDay = now.getDay()
/*
[0] - Domingo - Sunday
[1] - Segunda - Monday
[2] - Terça - Tuesday
[3] - Quarta - Wednesday
[4] - Quinta - Thursday
[5] - Sexta - Friday
[6] - Sábado - Saturday
*/

console.log(weekDay)
switch (weekDay) {
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    default:
        console.log('[ERRO]')
}