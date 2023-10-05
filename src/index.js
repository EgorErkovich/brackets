module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets = [];
  for (let key of bracketsConfig) {
    brackets.push(...key);
  }
  count = [];
  for (let a of brackets) {
    let ind1 = brackets.indexOf(a);
    let ind2 = brackets.lastIndexOf(a);
    if (ind1 !== ind2) {
      count.push(a);
      count.push(0);
    }
  }
  let stack = [];
  let res = '';
  for (let i = 0; i < str.length; i++) {
    let between = 0;
    res += str[i];
    let ind_first = brackets.indexOf(str[i]);
    let ind_last = brackets.lastIndexOf(str[i]);
    if ((ind_first % 2 === 0) && (ind_first === ind_last)){
      stack.push(ind_first + 1);
    } else if ((ind_first % 2 === 0) && (ind_first !== ind_last)) {
      count[count.indexOf(str[i])+1] += 1;
      if (str.indexOf(str[i], ind_first+1) === -1) {
        if (count[count.indexOf(str[i])+1] % 2 !== 0) {
          return false; 
        } else {
          continue;
        }
      }
      for (let j = i + 1; j < str.indexOf(str[i], j); j++) {
        between++;
      }
      if ((between % 2 !== 0) && (count[count.indexOf(str[i])+1] % 2 !== 0)) {
        return false;
      } else {
        continue;
      }
    }
     else {
      if (stack.pop() !== ind_first) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
