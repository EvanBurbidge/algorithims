var chai = require('chai');
var mocha = require("mocha");
var assert = chai.assert;
var expect = require("chai").expect;

/*
 Linked lists are composed of nodes and references / pointers pointing from one node to the other.
 The last reference is pointing to a null value. In this situation node 1 points to node 2 which
 points to node 3, which points to node 4 which is null.

 A single node contains two important items, the data, an integer, double or custom object. It contains a
 references pointing to the next node in the linked list.
 * */


function Node(data){
    this.data = data;
    this.nextNode = null;
}

function LinkedList() {
    this.head = null;
    this.size = 0;
}

LinkedList.prototype.insertStart = function(data){
    //increment the size of the list
  this.size++;
  //create a new node
  var node = new Node(data);
  //if we don't have a head to our list e.g. if its empty we set the head to be the node
  if(!this.head){
      this.head = node;
  }else{
      //otherwise the nextNode of our new node is the head
      node.nextNode = this.head;
      //the head becomes the node
      this.head = node;
  }
};
/*
* This function runs in O(1) time complexity
* */
LinkedList.prototype.getSize = function(){
    return this.size;
};
/*
 * This function runs in O(N) time complexity
 * */
LinkedList.prototype.getSizeLong = function(){
    var size = 0;
    var actualnode = this.head;
    while(actualnode !== null){
        size++;
        actualnode = actualnode.nextNode;
    }
    return size
};

LinkedList.prototype.traverse = function(){
  var actualNode = this.head;

  while(actualNode !== null){
      console.log("the value of this node is ", actualNode.data);
      actualNode = actualNode.nextNode;
  }
};

LinkedList.prototype.insertEnd = function(data){
    var newNode = new Node(data);
    var current = this.head;

    this.size = this.size + 1;

    while(current.nextNode !== null){
        current = current.nextNode;
    }
    current.nextNode = newNode;
};

LinkedList.prototype.removeItem = function(data){
    //if its empty return
    if(this.head === null){
        return false;
    }
    //decrement the size
    this.size--;
    //get the current and previous items
    var current = this.head;
    var previousNode = null;
    //check the data and assign the nodes
    while(current.data !== data){
        previousNode = current;
        current = current.nextNode;
    }
    // if we don't have a previous value we're at item one
    // the head is set to the next node of the current bypassing the current
    if(!previousNode){
        this.head = current.nextNode;
    }else{
        // otherwise the previous node skips the current node to its next node
        previousNode.nextNode = current.nextNode;
    }

};


describe('it should test the linked list', function () {
    var linkedList = new LinkedList();

    it('should insert the values and the size should be 4', function(){
        linkedList.insertStart(10);
        linkedList.insertStart(122);
        linkedList.insertStart(-5);
        linkedList.insertEnd(41);
        expect(linkedList.getSize()).to.equal(4);
    });
    it('should remove a value and the size should be 3', function(){
        linkedList.removeItem(-5);
        expect(linkedList.getSize()).to.equal(3);
    });

    it('should use the getsizelong function', function(){
        expect(linkedList.getSizeLong()).to.equal(3);
    });

    it('should empty the list', function(){
        linkedList.removeItem(10);
        linkedList.removeItem(122);
        linkedList.removeItem(41);
        expect(linkedList.getSize()).to.equal(0);
    });

});


