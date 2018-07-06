class Array {
  constructor(size = 5){
    this.store = {
        0:0,
        1:1,
        2:2,
        3:3,
        4:4
    };
    this.count = size;
  }
  length(){
    return this.count;
  }
  pop(){
    if(this.count === 0){
      return undefined;
    }
    let item = this.store[this.count];
    delete this.store[this.count]
    this.count--;
    return item;
  }
  push(item){
    this.store[this.count] = item;
    this.count++;
  }
  slice(key){
    let item = this.store[key];
    delete this.store[key];
    this.count--;
    this.renumber();
    return item;
  }
  renumber(){
    let start = 0;
    let max = this.count;
    for(let key in this.store){
      if(start === max) {
        return;
      }
      this.store[start] = this.store[key];
      start++
    }
    return true;
  }
}