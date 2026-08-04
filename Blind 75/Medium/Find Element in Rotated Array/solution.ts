export default function findInRotatedArray(
  numbers: number[],
  target: number,
): number {
    let left=0;
    let right=numbers.length-1;
    while(left<=right){
        const mid = Math.floor((left + right)/2)
        if(numbers[mid]===target){
            return mid;
        }
        if(numbers[left]<=numbers[mid]){
            if(target>=numbers[left] && target<numbers[mid]){
                right=mid-1;
            }else{
                left=mid+1;
            }
        }else{
            if(target<=numbers[right] && target>numbers[mid]){
                left=mid+1;
            }else{
                right=mid-1;
            }
        }
    }


    return -1
}