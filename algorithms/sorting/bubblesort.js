const array = [2,5,1,7,3,8,0,6,9,4];

const bubbleSort = data => {
  for(let i = 0; i<data.length; i++){
    for(let k = 1; k<data.length; k++){
      if(data[k-1]>data[k])
        [data[k-1],data[k]] = [data[k],data[k-1]];
    }
  }
  return data
}