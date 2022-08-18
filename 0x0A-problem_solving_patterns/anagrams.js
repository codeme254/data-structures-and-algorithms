//The problem tests the use of frequency counters techniques

// Given 2 strings, write a function called validAnagram to determine if the second array is an anagram of the first one. An anagram is a word/phrase/name formed by rearranging the words/phrase/name of another eg cinema and iceman, rat and tar aaz and zaa and many more

const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let char in str1){
        frequencyCounter1[str1[char]] = (frequencyCounter1[str1[char]] || 0) + 1
    }
    for(let char in str2){
        frequencyCounter2[str2[char]] = (frequencyCounter2[str2[char]] || 0) + 1
    }

    for(let key in frequencyCounter1){
        if(frequencyCounter1[key] === frequencyCounter2[key]){
            console.log(`${str1} and ${str2} are anagrams of each other`);
            return true
        }else{
            console.log(`${str1} and ${str2} are not anagrams of each other`)
            return false
        }
    }
}

validAnagram("boy", "yob")
validAnagram("aaz", "zaa")
validAnagram("cinema", "iceman")
validAnagram("car", "rat")
validAnagram("man", "na")
validAnagram("texttwisttime", "timetwisttext")