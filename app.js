function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase, n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 3.7;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
