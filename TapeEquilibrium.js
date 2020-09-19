/* Task score: 100% | Correctness: 100% | Performance: 100% */

const A = [2, 3, 4];

function solution(A) {
    if (typeof A === 'undefined' || !A.length) return 0;

    let sumRight = A.reduce((accumulator, item, index) => (index > 0) ? (accumulator + item) : (0), 0);
    let sumLeft = 0;
    let maxIndex = A.length - 1;
    let minDiff;

    for (let i = 0; i < maxIndex; i++) {
        sumLeft += A[i];

        let diff = Math.abs(sumLeft - sumRight);
        
        if(typeof minDiff === 'undefined' || diff < minDiff) minDiff = diff;

        if (i + 1 <= maxIndex) sumRight -= A[i + 1];
    }

    return minDiff;
}

const result = solution(A);

console.log(result);