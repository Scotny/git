function strong(n) {
    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }

    const digits = n.toString().split('');
    const sumOfFactorials = digits.reduce((sum, digit) => sum + factorial(Number(digit)), 0);
    return sumOfFactorials === n ? "STRONG!!!!" : "Not Strong !!";
}