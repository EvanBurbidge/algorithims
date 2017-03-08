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
        this.insert_node(self.root, data);
    }
};

Bst.prototype.insert_node = function (node, data) {
    if(data < node.data){
        node.leftChild = this.node_value_check(node.leftChild, data);
    }else{
        node.rightChild = this.node_value_check(node.rightChild, data);
    }
};

Bst.prototype.node_value_check = function(node, data){
    if(!node){
        node = new Node(data)
    }else{
        this.insert_node(node, data);
    }
};

Bst.prototype.get_end_value = function(direction){
    if(this.root){
        this.get_min(this.root)
    }
};
//this looks at the left + right recursively
Bst.prototype.recursive_value_search = function (direction, node) {
    if(node[direction]){
        this.get_min(node[direction]);
    }
    return node.data
};
