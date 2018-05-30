const testArray1 = [10,2,4,7,1,6,9,8,5,3];
//[3,5,8,9,6,1,7,4,2,10]
//[9,8,5,3,6,1,7,4,2,10]
//[2,4,7,1,6,3,5,8,9,10]
//[7,4,2,1,6,3,5,8,9,10]
//[5,3,6,1,2,4,7,8,9,10]
//[6,3,5,1,2,4,7,8,9,10]
//[4,2,1,5,3,6,7,8,9,10]
//[5,1,2,4,3,6,7,8,9,10]
//[3,4,2,1,5,6,7,8,9,10]
//[4,3,2,1,5,6,7,8,9,10]
//[1,2,3,4,5,6,7,8,9,10]
const pancakeSort = data => {
  let unsorted = data.length -1;
  let sorted;
  while(max){
    let flipIndex = [...data].slice(0,unsorted+1).indexOf(unsorted);
    let sectionToFlip = [...data].splice(0, flipIndex+1).reverse();
    let sortedSection = [...sectionToFlip, ...data.splice(flipIndex,data.length)];
    sorted = sortedSection;
    unsorted--
  }
  return
}