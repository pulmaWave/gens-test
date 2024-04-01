// const arr = [1, 2, 3, 4, 5]

const miniMaxSum = (arr) => {
  let min = 0
  let max = 0
  if (arr.length == 0) {
    console.log('Empty array, please enter another array')
    return 0
  }
  if (arr.length == 1) {
    console.log(arr[0], arr[0])
    return 0
  }
  if (arr.length == 2) {
    for (let i = 0; i < 2; ) {
      if (arr[i] > arr[i + 1]) {
        console.log(arr[i + 1], arr[i])
      } else {
        console.log(arr[i], arr[i + 1])
      }
      return 0
    }
  } else {
    const sort = arr.sort((a, b) => a - b)
    for (let i = 0; i < sort.length; i++) {
      if (i < sort.length - 1) {
        min += sort[i]
      }
      if (i > 0) {
        max += sort[i]
      }
    }
    console.log(min, max)
  }
}

/** Test case
 * 1. Empty array const arr = []
 * 2. Array with 1 element const arr = [1]
 * 3. Array with 2 elements const arr = [1, 2]
 * 4. Array with 5 elements const arr = [1, 2, 3, 4, 5]
 */

const testCase = [[], [21], [12, 2], [1, 2, 3, 4, 5]]
for (let i = 0; i < testCase.length; i++) {
  miniMaxSum(testCase[i])
}
