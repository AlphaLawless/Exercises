import random
al1 = str(input('Qual o nome do primeiro aluno: '))
al2 = str(input('Qual o nome do segundo aluno: '))
al3 = str(input('Qual o nome do terceiro aluno: '))
al4 = str(input('Qual o nome do quarto aluno: '))
lista = [al1, al2, al3, al4]
print('O aluno sorteado foi {}.'.format(random.choice(lista)))