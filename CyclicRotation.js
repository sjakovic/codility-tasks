
function solution(A) {
    K = K % A.length;

    if (K === 0 || K === A.length) {
        return A;
    }

    const sliceIndex = A.length - K;
    return [...A.slice(sliceIndex), ...A.slice(0, sliceIndex)]
}
