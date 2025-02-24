function sumDigits(number) {
    return Math.abs(number)
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0);
}