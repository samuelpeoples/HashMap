class HashMap {
	constructor(capacity, loadFactor) {
		this.capacity = capacity;
		this.loadFactor = loadFactor;
		this.capacityThreshhold = loadFactor * capacity;
		this.buckets = new Array(capacity);
	}
	hash(key) {
		let hashCode = 0;
		const prime = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = prime * hashCode * key.charCodeAt(i);
			hashCode = hashCode % this.capacity;
		}
		return hashCode;
	}
	set(key, value) {
		let hash = this.hash(key);
		if (hash) {
			hash.value = value;
			return;
		}
		return { key, value };
	}
	get(key) {
		let hash = this.hash(key);
		if (hash) {
			return hash;
		}
		return null;
	}
	has(key) {
		let hash = this.hash(key);
		for (const bucket in this.buckets) {
			if (hash == bucket) {
				return true;
			}
		}
		return false;
	}
	remove(key) {
		let hash = this.hash(key);
		for (const bucket in buckets) {
			if (hash == bucket) {
				console.log("remove this");
				return;
			}
			console.log("not found");
			return;
		}
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
console.log(newList);
