function redPackage(total = 100, count = 10) {
  // 初始化一个长度为 count 的数组，每个元素先分配1元
  const packets = Array(count).fill(1);

  // 计算初始分配后剩余的金额
  let remaining = total - count;

  // 随机分发剩余金额给各个红包
  for (let i = 0; i < count - 1; i++) {
      // 在剩余金额范围内随机生成一个金额（注意范围要减去剩余未分配的红包数目）
      const amount = Math.floor(Math.random() * remaining / (count - i - 1));
      // 将这个金额加入当前红包中
      packets[i] += amount;
      // 更新剩余金额
      remaining -= amount;
  }

  // 最后一个红包的金额即为剩余的金额
  packets[count - 1] += remaining;

  return packets;
}

export { redPackage };
