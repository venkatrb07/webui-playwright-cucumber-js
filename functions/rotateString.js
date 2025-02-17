function rotateString(inputStr) {
    let words = inputStr.split(" ");
    return words.slice(1).join(" ") + " " + words[0];
}

function rotateWordAndCompare(input1, input2, iterations = 0) {
    if (input2 === input1) {
        return true;
    }
    else if (iterations > input1.split(' ').length)
        return false

    return rotateWordAndCompare(input1, rotateString(input2), iterations + 1);
}

console.log("Positive case: " + rotateWordAndCompare("I automate with playwright skills","with playwright skills I automate"));

console.log("Nagative case: " + rotateWordAndCompare("I automate with playwrght skills","with playwright skills I automate"));