var idade = 12
if (idade < 16) {
    console.log('Você não VOTA!')
} else {
    if (idade < 18 || idade > 65) {
        console.log('Voto OPCIONAL!')
    }else {
        console.log('Voto OBRIGATÓRIO!')
    }
}