function moveInArray(
  curIndex: number,
  arrayLength: number,
  isNext: boolean,
  tail: number = 1
) {
  if (isNext) {
    if (curIndex === arrayLength - tail) return 0;
    else return curIndex + 1;
  }
  if (curIndex === 0) return arrayLength - tail;
  else return curIndex - 1;
}

export default moveInArray;
