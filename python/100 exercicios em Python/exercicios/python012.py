preco = float(input('Qual o preço do produto? R$'))
novopreco = preco - (preco * 5/100)
print('O desconto de 5%, em cima do produto de R${} é de R${}.'.format(preco, novopreco))
