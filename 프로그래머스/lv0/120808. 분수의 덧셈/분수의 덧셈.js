function solution(denum1, num1, denum2, num2) {
  let answer = [];
  let boonja = denum1 * num2 + denum2 * num1;
  let boonmo = num1 * num2;
  let gcd_value = gcd(boonmo, boonja);
  
  answer = [boonja / gcd_value, boonmo / gcd_value];
  return answer;
}

function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}