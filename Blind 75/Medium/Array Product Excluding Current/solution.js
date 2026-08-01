/**
 * @param {number[]} nums
 * @return {number[]}
 */
export default function arrayProductExcludingCurrent(nums) {

    const result = new Array(nums.length).fill(1);


    // Prefix products
    let prefix = 1;

    for(let i = 0; i < nums.length; i++){

        result[i] = prefix;

        prefix = prefix * nums[i];

    }


    // Postfix products
    let postfix = 1;

    for(let i = nums.length - 1; i >= 0; i--){

        result[i] = result[i] * postfix;

        postfix = postfix * nums[i];

    }


    return result;
}