/**
 * description 选择排序
 * @param arr
 */
function selectionSort(arr: Array<number>) {
  const sortArr = [...arr];
  for (let i = 0; i < sortArr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < sortArr.length; j++) {
      if (sortArr[j] < sortArr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [sortArr[i], sortArr[min]] = [sortArr[min], sortArr[i]];
    }
  }
  return sortArr;
}

export { selectionSort };
