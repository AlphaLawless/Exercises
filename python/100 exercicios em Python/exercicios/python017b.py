import math
cateto1 = int(input('Digite o valor do cateto oposto: '))
cateto2 = int(input('Digite o valor do cateto adjacente: '))
hipotenusa = math.hypot(cateto1,cateto2)
print('O valor da hipotenusa é {}'.format(hipotenusa))