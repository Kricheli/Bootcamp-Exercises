/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */
const longestCommonPrefix = function (strs)
{
let prefix = strs[0];
for(let i=0; i<strs.length; i++){
        for(let j=1; j<prefix.length; j++){
                if(strs[i][j] !== prefix[j]){
                        prefix = prefix.slice(0, j)
                }
        }
}
return prefix;
};


module.exports = longestCommonPrefix;
