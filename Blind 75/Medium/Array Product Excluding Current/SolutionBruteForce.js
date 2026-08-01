/**
 * @param {number[]} numbers
 * @return {number[]}
 */
export default function arrayProductExcludingCurrent(nums) {
  const result = [];
  for(let i=0;i<nums.length;i++){
    let temp = 1;
    for(let j=0;j<nums.length;j++){
      if(j!=i){
        temp = temp * nums[j];
      }
    }
    result.push(temp)
  }
  return result
}