class Array {
  constructor(size = 5, contents = {}){
    this.store = {
        0:0,
        1:1,
        2:2,
        3:3,
        4:4
    };
    this.length = size;
  }
  length(){
    return this.length;
  }
  pop(){
    if(this.length === 0){
      return undefined;
    }
    let item = this.store[this.length];
    delete this.store[this.length]
    this.length--;
    return item;
  }
  push(item){
    this.store[this.length] = item;
    this.length++;
  }
  splice(key, count, add){
    let removed = {};
    for(let i = key, start = 0; i < count; i++, start++){
      let temp = this.store[i];
      delete this.store[i];
      removed[start] = temp;
      this.length--;
    }
    this.renumber(0);
    return removed;
  }
  slice(key){
    let item = this.store[key];
    delete this.store[key];
    this.length--;
    this.renumber(0);
    return item;
  }
  shift(){
    if(this.length === 0){
      return undefined;
    }
    let item = this.store[0];
    delete this.store[0]
    this.length--;
    this.renumber(0)
    return item;
  }
  //issues with unshift and renumbering the object
  unshift(item){
    this.renumber(1);
    this.length++;
    this.store[0] = item;
    return this.store;
  }
  renumber(start){
    for(let key in this.store){
      if(start === this.length+start) {
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