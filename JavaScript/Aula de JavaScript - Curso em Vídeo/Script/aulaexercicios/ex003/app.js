function contar() {
  let inicio = document.querySelector('#txtini')
  let fim = document.querySelector('#txtfim')
  let passo = document.querySelector('#txtpasso')
  let resultado = document.querySelector('#resultado')

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert("[ERROR] FALTAM DADOS!")
    resultado.innerHTML = 'Impossivel Contar!'
  } else {
    resultado.innerHTML = 'Contando: '
    let inicioContagem = Number(inicio.value)
    let fimContagem = Number(fim.value)
    let passos = Number(passo.value)

    //Caso ocorra do usuário digitar 0 nos passos
    if (passo <= 0) {
      alert('Passo Inválido! Considerando PASSO 1')
      passos = 1
    }

    if (inicioContagem < fimContagem) {
      //contagem crescente.
      for (let c = inicioContagem; c <= fimContagem; c += passos) {
        resultado.innerHTML += `${c} `
      }
    } else {
      //contagem regresiva.
      for (let c = inicioContagem; c >= fimContagem; c -= passos) {
        resultado.innerHTML += `${c} `
      }
    }
    resultado.innerHTML += `\u{1F3C1}`
  }
}