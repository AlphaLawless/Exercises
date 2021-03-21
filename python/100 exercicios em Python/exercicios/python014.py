celsius = float(input('Digite o valor em °C '))
fahrenheit = (celsius * 1.8) + 32
print('A temperatura de {} °C em °F é de {:.2f}°F'.format(celsius, fahrenheit))
fahrenheit1 = float(input('Digite um valor em °F '))
celsius1 = (fahrenheit1 - 32) / 1.8
print('A temperatura de {} °F em °C é de {:.2f}°C'.format(fahrenheit1, celsius1))
