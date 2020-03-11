module.exports = class DepthCalculator {
    calculateDepth(arr) {

        let count = 1;

        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                let sum = 1;
                sum += this.calculateDepth(arr[i]);
                if (count < sum) {
                    count = sum;
                }
            }
        }
        return count;
    }
};