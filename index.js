const arr = [1, 2,3, 4]
// for(let i = 0 ; i < arr.length ; i++) {
//     console.log(arr[i])
// }
// let result = arr.map(value => {
//     value += 1 
//     return value
// })
// console.log(result)
// let result = arr.map(value => {
//     return value
// }) 
// console.log(result);
// let result = arr.reduce((prev,cur) => {
//     prev.indexOf(cur) == -1 && prev.push(cur)
//     return prev
// }, [])
for(item of arr) {
    console.log(item);
}