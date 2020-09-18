

const X = 10, Y = 85, D = 30;

function solution(X, Y, D) {
    const range = Y - X;
    const addStep = range % D > 0 ? 1 : 0;

    return parseInt(range / D) + addStep;
}

const result = solution(X, Y, D);

console.log(result);