var chai = require('chai');
var mocha = require("mocha");
var assert = chai.assert;
var expect = require("chai").expect;
/*
 It is an ADT with basic operations such as enqueue, dequeue and peek method. It has a FIFO structure, first in first out.
 This is the reverse of the queue, the first item that we insert is the first to be taken out. queues have a LIFO structure, last in first out.
 It can be implemented with dynamic arrays as well as with linked lists. It’s important for implementing the BFS search algorithm.

 There are several applications for this data type. E.g. when a resource is shared with several consumers, we store them in a queue.
 For example CPU scheduling. When data is transferred asynchronously, between processes, IO Buffers, and for operational research
 applications or stochastic models relies heavily on a queue. These ADT’s are used for operating systems in order to be used in order
 to maintain a queue of the processes that the code has to execute. If several applications are telling an operating system what to
 do then the OS is going to have to processes the tasks on a one by one basis.
  
 queues and Queues are fundamental for operating systems.
 * */

function Queue() {
    this.queue = [];
}
/*
 * @function
 * @name isEmpty
 * @description
 *   Check if the length of the queue is 0
 * */
Queue.prototype.isEmpty = function () {
    return this.queue.length === 0;
};
/*
 * @function
 * @name push
 * @description
 *   Push a new data item onto the queue
 * */
Queue.prototype.push = function (data) {
    this.queue.unshift(data);
    return data;
};
/*
 * @function
 * @name pop
 * @description
 *   Pop a new data item off the queue
 * */
Queue.prototype.pop = function () {
    return this.queue.pop(this.length);
};
/*
 * @function
 * @name size
 * @description
 *   gets the size of the queue
 * */
Queue.prototype.size = function () {
    return this.queue.length;
};
/*
 * @function
 * @name traverse
 * @description
 *   Loops over the queue
 * */
Queue.prototype.traverse = function () {
    for(var i = 0; i < this.queue; ++i){
        console.log(this.queue[i]);
    }
};

describe('it should test the queue functionality', function(){
    var queue = new Queue();
    it('should push all items onto the queue', function(){
        queue.push(10);
        queue.push(20);
        queue.push(30);
        console.log(queue);
        expect(queue.queue[queue.queue.length - 1]).to.equal(10);
        expect(queue.size()).to.equal(3);
    });

    it('should print all the items in the queue', function(){
        queue.traverse();
    });

    it("should pop two items off and get a size of one", function(){
        queue.pop();
        queue.pop();
        console.log(queue);
        expect(queue.queue[0]).to.equal(30);
    });

    it('should pop the last item off the queue and have an empty queue', function(){
        queue.pop();
        expect(queue.size()).to.equal(0);
    });
});


