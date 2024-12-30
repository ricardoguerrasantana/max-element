function maxElement(n, maxSum, k) {
  let r = k
  let l = k
  let arr = new Array(n).fill(0)
  while (maxSum > 0) {
    for (let i = 0; i < r - k; i++) {
      if (maxSum === 0) break
      arr[r - i]++
      maxSum--
    }
    if (r < n - 1) {
      r++
    }
    for (let i = 0; i < k - l; i++) {
      if (maxSum === 0) break
      arr[l + i]++
      maxSum--
    }
    if (l > 0) {
      l--
    }
    if (maxSum === 0) break
    arr[k]++
    maxSum--
  }
  return arr[k]
}

console.log(maxElement(3, 10, 2))
console.log(maxElement(3, 6, 1))

module.exports = maxElement