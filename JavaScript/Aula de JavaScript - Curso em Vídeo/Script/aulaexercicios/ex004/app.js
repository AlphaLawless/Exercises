function gerarTabuada() {
  let numero = document.querySelector('#txtnumber')
  let tabuada = document.querySelector('#seltab')

  if (numero.value.length == 0) {
    alert('Por favor, digite um número!')
  } else {
    let number = Number(numero.value)
    let count = 1
    tabuada.innerHTML = ''
    while (count <= 10) {
      let item = document.createElement('option')
      item.text = `${number} x ${count} = ${number * count}`
      item.value = `tabuada${count}`
      tabuada.appendChild(item)
      count++
    }
  }
}