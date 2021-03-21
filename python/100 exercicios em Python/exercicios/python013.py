salario = float(input('Qual o salário do funcionário? R$'))
aumento = (salario * 15/100)
novosalario = salario + aumento
print('O salário de R${:.2f} teve um aumento de R${:.2f} com um novo salário de R${:.2f}'.format(
    salario, aumento, novosalario))
