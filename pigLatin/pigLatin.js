function pigLatin(string) {
    return string.split(' ').map((word) => {
        // Find where the first vowel sound starts. "qu" counts as a
        // single consonant phoneme, so a "u" straight after a "q" is
        // skipped together with the "q" (e.g. "quiet" -> "iet" + "qu").
        let index = 0;
        while (index < word.length && !/[aeiou]/.test(word[index])) {
            if (word[index] === 'q' && word[index + 1] === 'u') {
                index += 2;
            } else {
                index += 1;
            }
        }

        // No vowel found — the whole word is the consonant cluster.
        if (index === 0) {
            return word + 'ay';
        }

        // Move the leading consonant cluster to the end, then append "ay".
        return word.slice(index) + word.slice(0, index) + 'ay';
    }).join(' ');
}

// Do not edit below this line
module.exports = pigLatin;
