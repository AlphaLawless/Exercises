from math import radians, sin, cos, tan
angulo = float(input('Digite um ângulo: '))
print('O seno do ângulo {}° é {:.2f}, o cosseno é {:.2f} e a tangente é {:.2f}'
.format(angulo, sin(radians(angulo)), cos(radians(angulo)), tan(radians(angulo))))