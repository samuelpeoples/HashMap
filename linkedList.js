class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(data) {
		this.head = new Node(data);
		this.tail = this.head;
		this.size = 1;
	}

	append(value) {
		let newNode = new Node(value);
		if (this.head == this.tail && this.head.data == undefined) {
			this.head.data = value;
		} else {
			this.tail.next = newNode;
			this.tail = this.tail.next;
			this.size++;
		}
	}

	prepend(value) {
		let newnode = new Node(value);
		if (this.head.data == undefined) {
			this.head.data = value;
		} else {
			newnode.next = this.head;
			this.head = newnode;
			this.size++;
		}
	}

	head = () => this.head;
	tail = () => this.tail;
	size = () => this.size;

	at(index) {
		let current = this.head;
		for (let i = 0; i <= index; i++) {
			current = current.next;
		}
		console.log(current.data);
	}

	pop() {
		let current = this.head;
		let previous = null;

		for (let i = 0; current.next != null; i++) {
			previous = current;
			current = current.next;
		}
		previous.next = current.next;
		this.size--;
	}

	contains(value) {
		let current = this.head;
		for (let i = 0; current.data != value && current.next != null; i++) {
			current = current.next;
		}
		console.log(current.data == value);
	}

	find(value) {
		let current = this.head;
		let i;
		for (i = 0; current.data != value && current.next != null; i++) {
			current = current.next;
		}

		if (current.data == value) console.log(`Node ${i}: ${current.data}`);
		else console.log("Value is not contained");
	}

	log() {
		let current = this.head;
		let result = "";
		while (current) {
			result += `( ${current.data} ) -> `;
			current = current.next;
		}
		console.log(result + "null");
	}

	//extra credit

	insertAt(val, index) {
		let current = this.head;
		let previous = null;

		if (index == 0) {
			current = current.next;
			return;
		}

		for (let i = 0; i < index; i++) {
			previous = current;
			current = current.next;
		}

		if (current == null) {
			console.log("This index dose not exist");
			return;
		}
		let newNode = new Node(val);
		previous.next = newNode;
		newNode.next = current;
		this.size++;
	}

	removeAt(index) {
		let current = this.head;
		let previous = null;

		if (current == null) return;

		if (index == 0) {
			this.head = current.next;
			return;
		}

		for (let i = 0; current != null && i < index; i++) {
			previous = current;
			current = current.next;
			console.log(current);
		}

		if (current == null) return;

		previous.next = current.next;
		this.size--;
	}
}

export { LinkedList };
