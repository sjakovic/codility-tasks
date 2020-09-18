/* Task score: 100% | Correctness: 100% | Performance: 100% */

const A = [2, 3, 1, 4, 8, 5, 7];

function solution(A) {
    if (!A.length) return 1;
    let n = A.length + 1;
    return (n + (n * n - n) / 2) - A.reduce((a, b) => a + b);
};

const result = solution(A);

console.log(result);
