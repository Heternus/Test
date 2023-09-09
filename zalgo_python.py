import random
# Some data from the internet was collected to create this code!
# Alguns dados foram coletados para criar este código!

# Este código foi testado antes de ser usado!
# This code has been tested before being used!

# Este sao caracteres zalgo
zalgo_chars = [
    '\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310',
    '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343',
    '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350',
    '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d',
    '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369',
    '\u036a', '\u036b', '\u036c', '\u036d', '\u036e', '\u036f', '\u033e', '\u035b',
    '\u0346', '\u031a'
]

def zalgo(text, intensity=10):
    zalgo_text = ""
    for char in text:
        zalgo_text += char
        for _ in range(intensity):
            zalgo_text += random.choice(zalgo_chars)
    return zalgo_text

input_text = input("Digite a string para aplicar o efeito Zalgo: ")
intensity = int(input("Digite a intensidade (número de caracteres Zalgo por caractere): "))

zalgo_text = zalgo(input_text, intensity)
print("Texto com efeito Zalgo:")
print(zalgo_text)
