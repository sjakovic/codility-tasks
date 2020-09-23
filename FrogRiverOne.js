/* Task score: 100% | Correctness: 100% | Performance: 100% */


const X = 3;
const A = [ 1, 3, 1, 3, 2, 1, 3];

function solution(X, A) {
    let positions = Array(X).fill(0);
    let sum = 0;

    for (let i = 0; i < A.length; i++) {
        if(A[i] <= X) {
            if(positions[A[i] - 1] === 0) {
                positions[A[i] - 1] = 1;
                sum += 1;
                if(sum === X) {
                    return i;
                }
            }
        }
    }

    return -1;
}

console.log(solution(X, A));
