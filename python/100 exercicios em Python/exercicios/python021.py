import pygame

pygame.init()
pygame.mixer.music.load('ex21.wav')
pygame.mixer.music.play()
pygame.event.wait()
input()