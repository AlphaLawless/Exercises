largura = int(input('Qual a largura da parede? '))
altura = int(input('Qual a altura da parede? '))
area = largura * altura
tinta = area / 2
print('A area da parede é de {}m², para pintá-ça precisa {:.0f}L de tinta.'.format(area, tinta))
