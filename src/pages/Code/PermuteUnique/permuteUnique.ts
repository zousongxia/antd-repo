function permuteUnique(str: string) {
  const result: string[] = [];

  // 将字符串转换为数组并排序，以便去除重复元素
  const chars = str.split('').sort();

  // 递归函数来生成排列
  function permuteHelper(current: string[], remaining: string[]) {
    if (remaining.length === 0) {
      result.push(current.join(''));
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      // 如果当前字符与前一个相同，则跳过，以避免重复排列
      if (i > 0 && remaining[i] === remaining[i - 1]) continue;

      const next = current.concat(remaining[i]);
      const nextRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
      permuteHelper(next, nextRemaining);
    }
  }

  permuteHelper([], chars);

  return result;
}

export { permuteUnique };
