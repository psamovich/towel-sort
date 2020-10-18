// You should implement your task here.

function ascendingComparator() {
    return (a, b) => b - a;
}

function descendingComparator() {
    return (a, b) => a - b;
}

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix.reduce((previous, current, index) => {
        const isReversed = index % 2 !== 0;
        const compareFunction = isReversed ? ascendingComparator() : descendingComparator();
        previous.push(...current.sort(compareFunction));
        return previous;
    }, []);
}
