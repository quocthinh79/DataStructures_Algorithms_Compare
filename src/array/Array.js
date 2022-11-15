export default class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  getElementAtIndex(index) {
    return this.data[index];
  }
  push(element) {
    let result = [];
    result.length = this.length++;
    for (let i = 0; i < this.length; i++) {
      if (this.data[i]) {
        result[i] = this.data[i];
      }
    }
    result[result.length] = element;
    this.data = result;
    // this.data[this.length] = element;
    // this.length++;
    return this.length;
  }
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
  deleteAt(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
  insertAt(item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }
}
