const caesar = function(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const normalized = ((shift % 26) + 26) % 26;

    return str.split('').map((char) => {
        const index = alphabet.indexOf(char.toLowerCase());
        if (index === -1) {
            // Not a letter — keep punctuation, spaces etc. untouched
            return char;
        }
        const shifted = alphabet[(index + normalized) % 26];
        // Preserve the original letter's case
        return char === char.toUpperCase() ? shifted.toUpperCase() : shifted;
    }).join('');
};

// Do not edit below this line
module.exports = caesar;
