const quickSort = (data) => {
  if(data.length<2)
    return data

  const left = [];
  const right = [];
  const pivot = data[0];

  for(let i = 1; i < data.length; i++){
    if(data[i]<pivot)
      left.push(data[i]);
    else
      right.push(data[i]);
  }
  return quickSort(left).concat(pivot,quickSort(right));
}