function sum(numbers) {
    if (numbers == undefined || numbers.length == 0) {
        return 0;
    } else {
        let total = numbers.reduce((prev, curr) => (prev += curr));
        return total;
    }
}

function multiply(numbers) {
    if (numbers == undefined || numbers.length == 0) {
        return 0;
    } else {
        let total = numbers.reduce((prev, curr) => (prev *= curr));
        return total;
    }
}

// reverse
function reverse(str) {
    if (str.length == 0 || str == undefined) {
        return "";
    } else {
        let charArr = str.split("");
        let res = charArr.reduce((prev, next) => next + prev, "");
        return res;
    }
}

function filterLongWords(words, i) {
    if (words.length == 0 || words == undefined) {
        return [];
    } else {
        let list = words.filter((word) => word.length > i);
        return list;
    }
}

// console.log(filterLongWords(["sudip","abc","ab","rakesh"],3));
// mocha test

function sumtester() {
    let numbers;
    describe("sum", function () {
        it("should return the sum of array", function () {
            assert.equal(sum([1, 2, 3, 4, 5]), 15);
        });
        it("if array is undefined or length of 1 should return sum 0", () => {
            assert.equal(sum(numbers), 0);
        });
    });
    // mocha.run();
}

function multiplyTester() {
    let numbers = [1, 2, 3, 4, 5];
    describe("multiply", function () {
        it("should return the multipication of array", function () {
            assert.equal(multiply(numbers), 120);
        });
    });
    // mocha.run();
}

function reverseTester() {
    describe("reverse", function () {
        it("should return the reverse of string", function () {
            assert.equal(reverse("sudip"), "pidus");
        });
        it("should return the empty string if string is undefined or of length 0", function () {
            assert.equal(reverse(""), "");
        });
    });
}

function filterLongWordsTester() {
    describe("longest word than given i", function () {
        it("should return array of words if the length of string is greater than i", function () {
            assert.deepEqual(filterLongWords(["sudip", "abc", "ab", "rakesh"], 3), [ "sudip", "rakesh" ]);
        });
        it("should return empty array if array is undefined or of length 0", function () {
            assert.deepEqual(filterLongWords([], 3), []);
        });
    });
}

sumtester();
multiplyTester();
reverseTester();
filterLongWordsTester();
mocha.run();
