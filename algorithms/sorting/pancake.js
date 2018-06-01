const testArray1 = [10,2,4,7,1,6,9,8,5,3];
const pancakeSort = data => {
  let Data = data;
  let countdown = Data.length -1;
  while(countdown){
    let unsorted = Data.slice(0,countdown+1);
    let flipIndex = unsorted.indexOf(Math.max(...unsorted));
    if(unsorted.length===2 && Data[1]>Data[0]){
      countdown--
      continue;
    }
    let sectionToFlip = Data.splice(0, flipIndex+1);
    let flippedSection = sectionToFlip.reverse();
    let remainder = Data.splice(0,countdown-flipIndex);
    let assembled = flippedSection.concat(remainder);
    let resolved = assembled.reverse();
    Data = resolved.concat(Data);
    countdown--
  }
  return Data;
}