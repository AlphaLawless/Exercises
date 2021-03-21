metros = float(input('Digite quantos metros foram: '))
km = metros / 1000
hm = metros / 100
dam = metros / 10
dm = metros * 10
cm = metros * 100
mm = metros * 1000
print('A medidade de {}m corresponde à:'.format(metros))
print('{:.0f}km'.format(km))
print('{:.0f}hm'.format(hm))
print('{:.0f}dam'.format(dam))
print('{:.0f}dm'.format(dm))
print('{:.0f}cm'.format(cm))
print('{:.0f}mm'.format(mm))
