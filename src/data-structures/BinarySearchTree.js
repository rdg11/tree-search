// BINARY SEARCH TREE ALGORITHM
// Node class
export class Node {
	constructor(data) {
		this.data = data
		this.left = null
		this.right = null
	}
}

// Binary Search tree class
export class BinarySearchTree {
	constructor() {
		// root of a binary search tree
		this.root = null
		this.orderedArray = []
	}

	clearArray() {
		this.orderedArray = []
	}

	// CREATES NEW NODE TO BE INSERTED, calls insertNode
	insert(data) {
		// Creating a node and initialising with data
		let newNode = new Node(data)
		console.log('New node with data:' + data)

		// if root is null then node will be added to the tree and made root
		if (this.root === null) {
			this.root = newNode
		} else {
			// find the correct position in the tree and add the node
			this.insertNode(this.root, newNode)
		}
	}

	// Method to insert a new node in a tree, takes ROOT node and NEW node
	insertNode(node, newNode) {
		// if the data is less than the node data, move LEFT of the tree
		if (newNode.data < node.data) {
			// if left node is null, insert node here
			if (node.left === null) {
				node.left = newNode
			} else {
				// if left node is not null, recur until null is found
				this.insertNode(node.left, newNode)
			}
		}

		// if the data is greater than the node data, move RIGHT of the tree
		else {
			if (node.right === null) {
				node.right = newNode
			} else {
				// if left node is not null, recur until null is found
				this.insertNode(node.right, newNode)
			}
		}
	}

	// FINDS AND REMOVES NODE, calls removeNode
	remove(data) {
		// root is re-initialized with the root of modified tree
		this.root = this.removeNode(this.root, data)
	}

	// Method to remove node with a given data, it recur over the tree to find the given data and removes it
	removeNode(node, key) {
		// if root is null then tree is empty
		if (node === null) {
			return null
		}

		// if data to be deleted is less than root data, then move to left subtree
		else if (key < node.data) {
			node.left = this.removeNode(node.left, key)
			return node
		}

		// if data to be delete is greater than roots data then move to right subtree
		else if (key > node.data) {
			node.right = this.removeNode(node.right, key)
			return node
		}

		// if data is similar to the root's data then delete this node
		else {
			// deleting node with no children
			if (node.left === null && node.right === null) {
				node = null
				return node
			}

			// deleting node with one children
			if (node.left === null) {
				node = node.right
				return node
			} else if (node.right === null) {
				node = node.left
				return node
			}

			// Deleting node with two children minimum node of the right subtree is stored in aux
			let aux = this.findMinNode(node.right)
			node.data = aux.data

			node.right = this.removeNode(node.right, aux.data)
			return node
		}
	}

	// FINDS NODE with given data
	find(node, data) {
		// if trees is empty return null
		if (node === null) {
			return null
		}
		// if data is less than node's data, move left
		else if (data < node.data) {
			return this.find(node.left, data)
		}
		// if data is more than node's data, move right
		else if (data > node.data) {
			return this.find(node.right, data)
		}
		// if data is equal to the node data, return node
		else {
			return node
		}
	}

	// finds the minimum node in tree, searching starts from given node
	findMinNode(node) {
		// if left of a node is null, then it must be minimum node
		if (node.left === null) return node
		else return this.findMinNode(node.left)
	}

	// returns root of the tree
	getRootNode() {
		console.log('root node data:' + this.root.data)
		return this.root
	}

	// Performs inorder traversal of a tree
	inorder(node) {
		if (node !== null) {
			this.inorder(node.left)
			this.orderedArray.push(node.data)
			this.inorder(node.right)
		}
	}

	// Performs preorder traversal of a tree
	preorder(node) {
		if (node !== null) {
			this.orderedArray.push(node.data)
			this.preorder(node.left)
			this.preorder(node.right)
		}
	}

	// Performs postorder traversal of a tree
	postorder(node) {
		if (node !== null) {
			this.postorder(node.left)
			this.postorder(node.right)
			this.orderedArray.push(node.data)
		}
	}

	levelorder(node) {
		if (node !== null) {
			let queue = [node]
			while (queue.length != 0) {
				let node = queue.pop()
				this.orderedArray.push(node.data)
				if (node.left) queue.unshift(node.left)
				if (node.right) queue.unshift(node.right)
			}
		}
	}
}
