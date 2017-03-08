var chai = require('chai');
var mocha = require("mocha");
var assert = chai.assert;
var expect = require("chai").expect;


function Node(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
}


function Bst(){
    this.root = null;
}
Bst.prototype.insert = function(data){
    if(!this.root){
        this.root = new Node(data);
    }else{
        this.insert_node(this.root, data);
    }
};

Bst.prototype.insert_node = function (node, data) {
    if(data < node.data){
        if(!!node.leftChild){
            this.insert_node(node.leftChild, data);
        }else{
            node.leftChild = new Node(data);
        }
    }else{
        if(!!node.rightChild){
            this.insert_node(node.rightChild, data);
        }else{
            node.rightChild = new Node(data);
        }
    }
};

//The helper to get us started searching for an item
Bst.prototype.get_end_value = function(direction){
    if(this.root){
        this.get_min(direction, this.root)
    }
};

//this looks at the left + right recursively
Bst.prototype.recursive_value_search = function (direction, node) {
    if(node[direction]){
        this.get_min(node[direction]);
    }
    return node.data
};

Bst.prototype.traverse = function () {
    if(!!this.root){
        this.traverse_in_order(this.root);
    }
};

Bst.prototype.traverse_in_order = function (node) {
    if(!!node.leftChild){
        this.traverse_in_order(node.leftChild);
    }
    console.log(node.data);
    if(!!node.rightChild){
        this.traverse_in_order(node.rightChild);
    }

};

Bst.prototype.remove = function(data){
  if(this.root){
      this.remove_node(this.root, data);
  }
};

Bst.prototype.remove_node = function(node, data){
    if(!node){
        return null;
    }

    if(data < node.data){
        node.leftChild = this.remove_node(node.leftChild, data);
    }else if(data > node.data){
        node.rightChild = this.remove_node(node.rightChild, data);
    }else{
        console.log("removing leaf node");
        if(!node.leftChild && !node.rightChild){
            node = null;
            return false;
        }
        console.log("removing with a single child");
        var tmp;
        if(!node.leftChild){
            tmp = node.rightChild;
            node = null;
            return tmp;
        }else if(!node.rightChild){
            tmp = node.leftChild;
            node = null;
            return tmp;
        }

        console.log("removing two children");
        var tmp_node = this.get_predecessor(node.leftChild);
        node.data = tmp_node.data;
        node.leftChild = this.remove_node(tmp_node.data, node.leftChild);
    }
    return node;
};

Bst.prototype.get_predecessor = function(node){
    if(node.rightChild){
        return this.get_predecessor(node.rightChild);
    }
    return node;
};

var test = new Bst();
    test.insert(10);
    test.insert(8);
    test.insert(9);
    test.insert(29);
    test.traverse();
    test.remove(29);
    test.remove(9);
    test.traverse()


