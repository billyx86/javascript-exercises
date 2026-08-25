const snakeCase = function(string) {
    return string
        // Split camelCase humps. A hump is an uppercase letter followed by
        // two or more lower-case letters ("Case" in "snakeCase"), so single
        // upper-case letters ("SnAkE", "CaSe") stay inside the word.
        .replace(/([a-z0-9])([A-Z][a-z]{2,})/g, '$1 $2')
        .toLowerCase()
        // Any non-alphanumeric run (spaces, commas, dots, dashes...)
        // becomes a single word separator.
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
        .replace(/ /g, '_');
};

// Do not edit below this line
module.exports = snakeCase;
