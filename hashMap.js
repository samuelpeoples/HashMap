import { LinkedList } from "linkedList.js";

class HashMap {
	constructor(capacity, loadFactor) {
		this.initCapacity = 16;
		this.capacity = this.initCapacity;
		this.loadFactor = loadFactor;
		this.capacityThreshhold = this.loadFactor * this.capacity;
		this.buckets = new Array(capacity).fill(null);
		this.populatedBuckets = 0;
		this.bucketsNum = this.buckets.length;
	}
	hash(key) {
		let hashCode = 0;
		const prime = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = prime * hashCode + key.charCodeAt(i);
			hashCode = hashCode % this.capacity;
		}
		return hashCode;
	}
	set(key, value) {
		if (this.populatedBuckets > this.capacity) {
			//add another bucket
			this.buckets.push(null);
		}
		let hash = this.hash(key);
		if (this.buckets[hash]) {
			this.buckets[hash].value = value;
			return;
		}

		this.buckets[hash] = { key, value };
		this.buckets[hash] = new LinkedList();
		this.buckets[hash].append(key, value);
		this.populatedBuckets++;
	}
	get(key) {
		let hash = this.hash(key);
		if (this.buckets[hash]) {
			return this.buckets[hash];
		}
		return null;
	}
	has(key) {
		let hash = this.hash(key);
		return this.buckets[hash];
	}
	remove(key) {
		let hash = this.hash(key);
		if (this.buckets[hash]) {
			bucket[hash] = this.buckets[hash + 1];
			return;
		}
		console.log("Does not exist");
		return;
	}
	entries() {
		let newArr = [];
		for (const bucket in this.buckets) {
			newArr.push(bucket);
		}
		return newArr;
	}
}

let newList = new HashMap(16, 0.8);

newList.set("firstname", "lastname");
newList.set("fruit", "apple");
newList.set("fruit", "pear");
newList.set("fruit1", "pear1");
newList.set("fruit2", "pear2");
newList.set("fruit3", "pear3");
newList.set("fruit4", "pear4");
newList.set("fruit5", "pear5");
newList.set("fruit6", "pear6");
newList.set("fruity", "pear7");
newList.set("fruit8", "pear8");
newList.set("fruit9", "pear9");
newList.set("fruit10", "pear10");
newList.set("fruit11", "pear11");
newList.set("fruit12", "pear12");
newList.set("fruit13", "pear13");
console.log(newList);
