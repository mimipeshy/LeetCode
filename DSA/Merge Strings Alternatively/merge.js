/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergedString=[];
    let i = 0;
    let j =0;
    while( i < word1.length && j < word2.length){
        mergedString.push(word1[i]);
        mergedString.push(word2[j]);
        i++;
        j++;
    }

    //check if  word one is longer then add it at the end
    while(i < word1.length){
        mergedString.push(word1[i++]);
    }
    while(j < word2.length){
        mergedString.push(word2[j++]);
    }
    //convert back to string
    return mergedString.join('');
    
};