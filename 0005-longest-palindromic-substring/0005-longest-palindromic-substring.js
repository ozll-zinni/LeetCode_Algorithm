/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    maxlen = 0 //최대 길이 저장
    longestPal = ''; //가장 긴 팰린드롬의 문자열

    const isPalindrome = (left, right) => {
        while(left >=0 && right < s.length && s[left] === s[right]){
            left --;
            right ++;
        }
        return [left + 1, right - 1];
    }

    for(let i = 0; i < s.length; i++) {
        let[start1, end1] = isPalindrome(i, i+1);
        if(end1 - start1 + 1 > maxlen) {
            maxlen = end1 - start1 + 1;
            longestPal = s.slice(start1, end1+1);
        }
        
        let[start2, end2] = isPalindrome(i, i);
        if(end2 - start2 + 1 > maxlen) {
            maxlen = end2 - start2 + 1;
            longestPal = s.slice(start2, end2 + 1);
        }
    }

    return longestPal;
};