var chai = require('chai');
var mocha = require("mocha");
var assert = chai.assert;
var expect = require("chai").expect;

/**
 *
 * In this case we want to find out if a string, or any variations of that string can still be considered a palindrome
 * e.g. if we have the string civic then we have a palindrome, but if we rotate its members by one we have ivicc, this should
 * still return true as the letters in it can be arranged in a way by which we can create a palindrome. Similary the string civil
 * is not a palindrome and any permutations of this should be considered false too
 * */

function isPermutablePalindrome(str){

    var unique_chars = new Set();
    for(var i = 0; i < str.length; ++i){
        if(!unique_chars.has(str[i])){
            unique_chars.add(str[i]);
        }else{
            unique_chars.delete(str[i]);
        }
    }

    return unique_chars.size <= 1;

}

var t1 = 'civic';
var t2 = 'ivicc';
var t3 = 'civil';
var t4 = 'ivilc';


describe('it should test the palindrome function', function(){
    it('should return true values from the function', function(){
       expect(isPermutablePalindrome(t1)).to.equal(true);
       expect(isPermutablePalindrome(t2)).to.equal(true);
    });
    it('should return false values from the function', function(){
       expect(isPermutablePalindrome(t3)).to.equal(false);
       expect(isPermutablePalindrome(t4)).to.equal(false);
    });
});
