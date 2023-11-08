
// function to break camel case of a string by adding a space in front of upper char
function breakCamelCase(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() && i !== 0 && str[i - 1] !== ' ') {
            result += ' ';
        }
        result += str[i];
    }

    return result;
}