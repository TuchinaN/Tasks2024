
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let l = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[l--] = nums1[i--];
        } else {
            nums1[l--] = nums2[j--];
        }
    }

    while (j >= 0) {
        nums1[l--] = nums2[j--];
    }
};

const nums1 = [-11, 2, 10, 12, 0, 0];
const m = 4;
const nums2 = [-4, 1, 10.5];
const n = 3;
merge(nums1, m, nums2, n);

console.log(nums1)