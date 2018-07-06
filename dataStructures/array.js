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
  splice(key, count, add){
    let removed = {};
    for(let i = key, start = 0; i < count; i++, start++){
      let temp = this.store[i];
      delete this.store[i];
      removed[start] = temp;
      this.count--;
    }
    this.renumber();
    return removed;
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
    for(let key in this.store){
      if(start === this.count) {
        return;
      }
      let temp = this.store[key];
      delete this.store[key];
      this.store[start] = temp;
      start++;
    }
    return true;
  }
}