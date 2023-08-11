import React, { useEffect, useState } from 'react'
import { BinarySearchTree } from '../data-structures/BinarySearchTree'

export default function Tree() {
	const [data, setData] = useState(0)
	const [BST, setBST] = useState(null)

	useEffect(() => {
		setBST(new BinarySearchTree())
	}, [])

	function insertData() {
		BST.insert(data)
	}
	function removeData() {
		BST.remove(data)
	}
	function createTree() {
		// dont do this null thing, (leaves a bunch of nodes unused, should set those to null)
		BST.root = null
		BST.insert(10)
		BST.insert(5)
		BST.insert(15)
		BST.insert(3)
		BST.insert(7)
		BST.insert(20)
		BST.insert(12)
	}

	function inorderTraversal() {
		BST.clearArray()
		BST.inorder(BST.root)
		console.log('In-order traversal array:', BST.orderedArray)
	}
	function preorderTraversal() {
		BST.clearArray()
		BST.preorder(BST.root)
		console.log('Pre-order traversal array:', BST.orderedArray)
	}
	function postorderTraversal() {
		BST.clearArray()
		BST.postorder(BST.root)
		console.log('Post-order traversal array:', BST.orderedArray)
	}
	function levelorderTraversal() {
		BST.clearArray()
		BST.levelorder(BST.root)
		console.log('Level-order traversal array:', BST.orderedArray)
	}

	function renderTree(node) {
		const { left, right, element } = node

		return
	}

	return (
		<div className="border-8 border-gray-500 h-screen w-screen">
			{/* CONTROL PANEL */}
			<div className="bg-gray-300 flex justify-center">
				<div className="mx-4">
					<input
						className="px-3 py-2 mx-1 my-2 rounded bg-white text-red-500 text-lg font-bold"
						value={data}
						onChange={e => setData(Number(e.target.value))}
						type="number"
					/>
					<button
						className="px-3 py-2 mx-1 my-2 rounded bg-red-500 text-white text-lg font-bold"
						onClick={insertData}
					>
						Insert
					</button>
					<button
						className="px-3 py-2 mx-1 my-2 rounded bg-red-500 text-white text-lg font-bold"
						onClick={removeData}
					>
						Remove
					</button>
					<button
						className="px-3 py-2 mx-1 my-2 rounded bg-red-500 text-white text-lg font-bold"
						onClick={createTree}
					>
						Create Tree
					</button>
				</div>
				<div className="mx-4">
					<button
						className="px-3 py-2 mx-1 my-2 rounded bg-blue-500 text-white text-lg font-bold"
						onClick={inorderTraversal}
					>
						In-order Traversal
					</button>
					<button
						className="px-3 py-2 mx-1 my-2 rounded bg-blue-500 text-white text-lg font-bold"
						onClick={preorderTraversal}
					>
						Pre-order Traversal
					</button>
					<button
						className="px-3 py-2 mx-1 my-2 rounded bg-blue-500 text-white text-lg font-bold"
						onClick={postorderTraversal}
					>
						Post-order Traversal
					</button>
					<button
						className="px-3 py-2 mx-1 my-2 rounded bg-blue-500 text-white text-lg font-bold"
						onClick={levelorderTraversal}
					>
						Level-order Traversal
					</button>
				</div>
			</div>

			{/* 

											[NODE]
										[NODE, NODE]
							[NODE, NODE, NODE, NODE]
				[NODE, NODE, NODE, NODE, NODE, null]
			
			*/}

			{/* TREE DIAGRAM */}
			<div className="bg-green-200 flex justify-center ">
				<div className="flex justify-center">
					<div className="flex flex-col"></div>
				</div>
			</div>
		</div>
	)
}
