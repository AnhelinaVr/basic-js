class VigenereCipheringMachine {
    constructor(direction) {
        this.direction = direction;
    }
    encrypt(message, key) {
        message = message.toUpperCase();
        key = key.toUpperCase();
        let result = '',
            engAlphabet = [];
        if (message == undefined || key == undefined) throw new Error();
        for (let i = 65; i < 91; i++) engAlphabet.push(String.fromCharCode(i));
        for (let i = 0, k = 0; i < message.length; i++, k++) {
            if (engAlphabet.includes(message[i])) {
                let index = (engAlphabet.indexOf(message[i]) + engAlphabet.indexOf(key.charAt(k % key.length))) % engAlphabet.length;
                result += engAlphabet[index];
            } else {
                k = k - 1;
                result += message[i];
            }
        }
        return (this.direction === false) ? result.split('').reverse().join('') : result;
    }

    decrypt(message, key) {
        message = message.toUpperCase();
        key = key.toUpperCase();
        let result = '',
            engAlphabet = [];
        if (message == undefined || key == undefined) throw new Error();
        for (let i = 65; i < 91; i++) {
            engAlphabet.push(String.fromCharCode(i));
        }
        for (let i = 0, k = 0; i < message.length; i++, k++) {
            if (engAlphabet.includes(message[i])) {
                let index = ((engAlphabet.indexOf(message[i]) + engAlphabet.length) - engAlphabet.indexOf(key.charAt(k % key.length))) % engAlphabet.length;
                result += engAlphabet[index];
            } else {
                k = k - 1;
                result += message[i];
            }
        }
        return (this.direction === false) ? result.split('').reverse().join('') : result;
    }
}
module.exports = VigenereCipheringMachine;