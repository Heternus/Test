// Código javascript que aplica o efeito zalgo e foi testado depois que criei
// JavaScript code that applies the Zalgo effect, tested after I created!

function zalgo(text, intensity) {
    const zalgoChars = [
        '\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310',
        '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343',
        '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350',
        '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d',
        '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369',
        '\u036a', '\u036b', '\u036c', '\u036d', '\u036e', '\u036f', '\u033e', '\u035b',
        '\u0346', '\u031a'
    ];

    function getRandomZalgo() {
        const randomIndex = Math.floor(Math.random() * zalgoChars.length);
        return zalgoChars[randomIndex];
    }
    let zalgoText = '';
    for (let i = 0; i < text.length; i++) {
        zalgoText += text[i];
        for (let j = 0; j < intensity; j++) {
            zalgoText += getRandomZalgo();
        }
    }
    return zalgoText;
}

const inputText = prompt("Digite a string para aplicar o efeito Zalgo: ");
const intensity = parseInt(prompt("Digite a intensidade (número de caracteres Zalgo por caractere):"));

const zalgoText = zalgo(inputText, intensity);
console.log("Texto com efeito Zalgo:");
console.log(zalgoText);
