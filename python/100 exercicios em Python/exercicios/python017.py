import math
catop = float(input('Digite o cateto oposto: '))
catad = float(input('Digite o cateto adjacente: '))
hipotenusa = math.pow(catop,2) + math.pow(catad,2)
print('O resultado do teorema de pítagoras {:.2f}.'.format(math.sqrt(hipotenusa)))