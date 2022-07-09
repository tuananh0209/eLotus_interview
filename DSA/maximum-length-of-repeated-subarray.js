/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    //init 2D array
    let lenNums1 = nums1.length,
        lenNums2 = nums2.length;
    let tempArr = [...Array(lenNums2 + 1)].map(x => Array(lenNums1 + 1).fill(0))
    
    nums1.forEach((value, index) => {
        tempArr[0][index + 1] = value;
    })

    nums2.forEach((value, index) => {
        tempArr[index + 1][0] = value;
    })
    //search for max value
    let max = 0;

    for (let i = lenNums1 - 1; i >= 0; i--) {
        for (let j = lenNums2 - 1; j >= 0; j--) {
            if (nums1[i] == nums2[j]) {
                tempArr[j][i] = tempArr[j + 1][i + 1] + 1;
                max = Math.max(max, tempArr[j][i]);
            }
        }
    }
    return max;
};
