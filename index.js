// let n = 50
// for (let i = 1; i <= n; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('Frontend Backend')
//   }

//   if (i % 3 === 0) {
//     console.log('Frontend')
//   } else if (i % 5 === 0) {
//     console.log('Backend')
//   } else {
//     console.log(i)
//   }
// }

function arrNum (arr) {
  let result
  let n = 50
  let newArr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }

  for (let i = 1; i <= arr.length; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += 'Frontend Backend'
    }

    if (i % 3 === 0) {
      result += 'Frontend'
    } else if (i % 5 === 0) {
      result += 'Backend'
    } else {
      result = i
    }
    newArr.push(result)
  }

  console.log(newArr)
}

console.log(arrNum([]))
