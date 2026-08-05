export default function smallestInRotatedArray(numbers: number[]): number {
  let l= 0;
  let r= numbers.length-1;
  while(l<r){
    const mid=Math.floor(((l+r)/2));
    if(numbers[r]<numbers[mid]){
      l=mid+1;
    }else{
      r=mid;
    }
  }
  return numbers[l];
}