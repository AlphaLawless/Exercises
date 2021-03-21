dias = float(input('Por quantos dias você alugou o carro? '))
km = float(input('Quantos Km você percorreu no carro? '))
preco = (60 * dias) + (km * 0.15+)
print('Com {:.0f} dias alugados e {} km percorridos, o preço a pagar é de R${:.2f}'.format(
    dias, km, preco))
