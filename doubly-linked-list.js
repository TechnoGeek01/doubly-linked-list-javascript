class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    var poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;

    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;

    var shiftedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      shiftedNode.next = null;
      this.head.prev = null;
    }

    this.length--;

    return shiftedNode;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    var current, count;

    if (index <= this.length / 2) {
      currNode = this.head;
      count = 0;

      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      currNode = this.tail;
      count = this.length - 1;

      while (count != index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  set(index, val) {
    var setNode = this.get(index);
    if (setNode) {
      setNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.unshift();
    if (index === this.length) return !!this.push();

    var newNode = new Node(val);

    var prevNode = this.get(index - 1);
    var nextNode = prevNode.next;

    prevNode.next = newNode;
    nextNode.prev = newNode;

    newNode.prev = prevNode;
    newNode.next = nextNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    var removedNode = this.get(index);
    var prevNode = removedNode.prev;
    var nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;

    return removedNode;
  }
}
