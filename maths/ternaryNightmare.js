var chai = require('chai');
var mocha = require("mocha");
var assert = chai.assert;
var expect = require("chai").expect

/*
 * @name changeEnds
 * @param val1 - the first value we want to compare in regards to the ranges its the newRange.range_start
 * @param val2 - the first value we want to compare in regards to the ranges its the range.range_start
 * @param greater - this provides our first boolean which tells us if we need a greater than or less than comparator.
 * @description
 *   Given a pre existing range of numbers we may want to merge overlapping ranges into this range. If the start of this new range
 *   is less than the start of the previous range then the lower of the two should become the range start, also if the end of the new
 *   range is greater than the end of the original range we must set the higher value as the range end
 * */

function changeEnds (val1, val2, greater) {
    return greater ? val1 > val2 ? val1:val2 :
                     val1 < val2 ? val1:val2 ;

}

var originalRange = {
        rangeStart:1000,
        rangeEnd:1005
    };

var newRangeOne = {rangeStart:999, rangeEnd:1006} ;
var newRangeTwo = {rangeStart:679, rangeEnd:1020};

describe("tests for equilibrium_index testing", function(){

    it('should equal switch the originl range starts' , function(){
        originalRange.rangeStart = changeEnds(newRangeTwo.rangeStart, originalRange.rangeStart, false);
        expect(originalRange.rangeStart).to.equal(newRangeTwo.rangeStart);
        originalRange.rangeStart = changeEnds(newRangeOne.rangeStart, originalRange.rangeStart, false);
        expect(originalRange.rangeStart).to.be.lessThan(newRangeOne.rangeStart);
    });

    it('should switch the range ends', function(){
        originalRange.rangeEnd = changeEnds(newRangeOne.rangeEnd, originalRange.rangeEnd, true);
        expect(originalRange.rangeEnd).to.equal(newRangeOne.rangeEnd);

        originalRange.rangeEnd = changeEnds(newRangeTwo.rangeEnd, originalRange.rangeEnd, true);
        expect(originalRange.rangeEnd).to.equal(newRangeTwo.rangeEnd);

        originalRange.rangeEnd = changeEnds(newRangeOne.rangeEnd, originalRange.rangeEnd, true);
        expect(originalRange.rangeEnd).to.equal(newRangeTwo.rangeEnd);
    });
});