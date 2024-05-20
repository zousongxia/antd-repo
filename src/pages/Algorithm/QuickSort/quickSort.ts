/**
 *description 快速排序
 * @param arr 数组
 * @returns
 */
function quickSort(arr: number[]): number[] {
  const sortArr = [...arr];
  if (sortArr.length <= 1) {
    return sortArr;
  }

  const pivot = sortArr.splice(Math.floor(sortArr.length / 2), 1)[0];

  const left = [];
  const right = [];
  for (const item of sortArr) {
    if (item < pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

export { quickSort };
