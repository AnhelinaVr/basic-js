module.exports = class DepthCalculator {
    calculateDepth(arr, result = 1, current = 1) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                current++;
                if (result < current) result++;
                result = Math.max(this.calculateDepth(arr[i], result, current), result);
                current--;
            }
        }
        return result;
    }
};