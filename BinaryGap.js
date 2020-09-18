/* Task score: 80% | Correctness: 80% | Performance: N/A */

function solution(N) {

    if (N === 1) return 0;

    const binary = Number(N).toString(2);

    let finalGap = 0;
    let tempGap = 0;

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            tempGap++;
        } else if (binary[i] === '1') {
            if (tempGap > finalGap) {
                finalGap = tempGap;
                tempGap = 0;
            }
        }
    }
    
    return finalGap;
}

const result = solution(9);