/**
 * @param {string} str
 * @return {boolean}
 */
export default function isBalancedBrackets(str) {
  let len = str.length;
  let stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
};
  for(let i=0 ; i<len ; i++){
    let ch = str[i];
    if(ch === '(' || ch === '{' || ch === '['){
      stack.push(ch);
    }else{
      let top = stack[stack.length-1];
      if (top === pairs[ch]) {
          stack.pop();
      } else {
          return false;
      }
    }
  }
  return stack.length === 0;


  
}