function stringAnagram(str1,str2) {
    let a = str1.split("").sort().join("");
    let b = str2.split("").sort().join("");
        return(a==b && str1.length == str2.length)        
}

function lengthOfLastWord(s) {
    let str = s.split(" ");
    return str[str.length-1].length
}
console.log(stringAnagram("Hello", "World"))
console.log(lengthOfLastWord("fly me  to  the moon"))