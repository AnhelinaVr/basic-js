module.exports = function transform(arr) {
    var result = [];
    if (!Array.isArray(arr)) throw new Error();
    if (arr.length === 0) return arr;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                if (arr[i + 2] && arr[i + 2].toString().includes('-prev')) i += 2;
                else i++;
                break;
            case '--discard-prev':
                result.pop();
                break;
            case '--double-next':
                if (arr[i + 1] !== undefined)
                    result.push(arr[i + 1]);
                break;
            case '--double-prev':
                if (arr[i - 1] !== undefined)
                    result.push(arr[i - 1]);
                break;
            default:
                result.push(arr[i]);
        };
    }
    return result;
};