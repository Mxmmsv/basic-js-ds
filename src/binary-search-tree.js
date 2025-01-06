const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.treeRoot === null) {
      this.treeRoot = newNode;
    } else {
      this._addNode(this.treeRoot, newNode);
    }
  }

  _addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this._hasNode(this.treeRoot, data);
  }

  _hasNode(node, data) {
    if (node === null) {
      return false;
    }

    if (data < node.data) {
      return this._hasNode(node.left, data);
    } else if (data > node.data) {
      return this._hasNode(node.right, data);
    } else {
      return true;
    }
  }

  find(data) {
    return this._findNode(this.treeRoot, data);
  }

  _findNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      return this._findNode(node.left, data);
    } else if (data > node.data) {
      return this._findNode(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this.treeRoot = this._removeNode(this.treeRoot, data);
  }

  _removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      node.data = this._minNode(node.right).data;
      node.right = this._removeNode(node.right, node.data);
      return node;
    }
  }

  min() {
    if (this.treeRoot === null) {
      return null;
    }

    return this._minNode(this.treeRoot).data;
  }

  _minNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this._minNode(node.left);
    }
  }

  max() {
    if (this.treeRoot === null) {
      return null;
    }

    return this._maxNode(this.treeRoot).data;
  }

  _maxNode(node) {
    if (node.right === null) {
      return node;
    } else {
      return this._maxNode(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};