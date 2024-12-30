const maxElement = require("../src/maxElement")

describe("maxElement", () => {
  // Basic functionality tests
  test("should handle the first sample case (n=3, maxSum=7, k=1)", () => {
    expect(maxElement(3, 7, 1)).toBe(3)
  })

  test("should handle the second sample case (n=4, maxSum=6, k=2)", () => {
    expect(maxElement(4, 6, 2)).toBe(2)
  })

  // Edge cases
  test("should handle minimum possible values (n=1, maxSum=1, k=0)", () => {
    expect(maxElement(1, 1, 0)).toBe(1)
  })

  test("should handle when k is at the start of array (n=3, maxSum=6, k=0)", () => {
    expect(maxElement(3, 6, 0)).toBe(3)
  })

  test("should handle when k is at the end of array (n=3, maxSum=6, k=2)", () => {
    expect(maxElement(3, 6, 2)).toBe(3)
  })

  // Constraint testing
  test("should respect maxSum constraint (n=5, maxSum=5, k=2)", () => {
    const result = maxElement(5, 5, 2)
    expect(result).toBeLessThanOrEqual(2) // Because 5/5 = 1 average per element
  })

  test("should handle large values (n=10, maxSum=20, k=5)", () => {
    const result = maxElement(10, 20, 5)
    expect(result).toBeLessThanOrEqual(4) // Maximum possible considering constraints
  })

  // // Error cases
  // test("should throw error when k >= n", () => {
  //   expect(() => maxElement(3, 6, 3)).toThrow("k must be less than n")
  // })

  // test("should throw error when n < 1", () => {
  //   expect(() => maxElement(0, 6, 0)).toThrow("n must be at least 1")
  // })

  // test("should throw error when maxSum < n", () => {
  //   expect(() => maxElement(5, 3, 2)).toThrow("maxSum must be at least n")
  // })
})
