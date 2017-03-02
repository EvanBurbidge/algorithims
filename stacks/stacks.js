var chai = require('chai');
var mocha = require("mocha");
var assert = chai.assert;
var expect = require("chai").expect;
/*
 The most important application of stacks are the stack memory.
 This is a region of memory in the Ram. A call stack is an abstract
 data type that stores information about the active subroutines,
 methods and functions of a computer program. The details of these
 stacks are normally hidden and automatic in a high level programming
 language such as java or C#.

 These stacks keep track of the point to which each active subroutine
 should return control when it finishes its execution. It can store
 temporary variables that are created by each function. If we have a
 function to add two numbers then the two numbers will be stored on
 the stack and removed upon the functions execution.

 Every time a function declares a new variable it’s put on the stack,
 every time a function exits all of the variables are set free. All of
 them are popped off the stack. Local variables are on the stack but are
 lost once a function returns. Stack memory has a limited memory storage.
* */

function Stack() {
    this.stack = [];
    this.length = 0;
}
/*
* @function
* @name isEmpty
* @description
*   Check if the length of the stack is 0
* */
Stack.prototype.isEmpty = function () {
    return this.stack.length === 0;
};
/*
* @function
* @name push
* @description
*   Push a new data item onto the stack
* */
Stack.prototype.push = function (data) {
    this.stack.push(data);
    this.length = this.stack.length;
    return data;
};
/*
* @function
* @name pop
* @description
*   Pop a new data item off the stack
* */
Stack.prototype.pop = function () {
    this.length--;
    return this.stack.pop(this.length);
};
/*
* @function
* @name size
* @description
*   gets the size of the stack
* */
Stack.prototype.size = function () {
    return this.length;
};
/*
* @function
* @name traverse
* @description
*   Loops over the stack
* */
Stack.prototype.traverse = function () {
    for(var i = 0; i < this.stack; ++i){
        console.log(this.stack[i]);
    }
};

describe('it should test the stack functionality', function(){
    var stack = new Stack();
    it('should push all items onto the stack', function(){
        stack.push(10);
        stack.push(20);
        stack.push(30);
        expect(stack.size()).to.equal(3);
    });

    it('should print all the items in the stack', function(){
       stack.traverse();
    });

    it("should pop two items off and get a size of one", function(){
       stack.pop();
       stack.pop();
       expect(stack.size()).to.equal(1);
    });

    it('should pop the last item off the stack and have an empty stack', function(){
       stack.pop();
       expect(stack.size()).to.equal(0);
    });
});


