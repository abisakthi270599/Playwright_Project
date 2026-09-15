//palindrome function

function isPalindrome(s) {
    let reversed = s.split('').reverse().join('');
    return s===reversed;
}

//palindrome using loop

function isPalindromeLoop(s) {
    let splitted = s.split('');
    let reversed1 = "";
        for(i=splitted.length-1;i>=0;i--) {
            reversed1 += splitted[i];
        }
    console.log("Reversed String: ", reversed1);
    return s === reversed1; 
}
console.log(isPalindrome("racecar"))
console.log(isPalindromeLoop("madam"))