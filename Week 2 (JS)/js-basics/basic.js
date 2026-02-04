/* 1 Sum values in object arrays
Input : { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
Output: { food: 60, travel: 20, bills: 100 }
*/
const expenses = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
let sum = {}
for (let [expense, values] of Object.entries(expenses)) {
    const totalSum = values.reduce((value, sum) => sum + value, 0)
    sum[expense] = totalSum
}
console.log(sum);

/* 2 Count word occurrences in array
Input : ["apple", "banana", "apple", "orange", "banana", "apple"]
Output : { apple: 3, banana: 2, orange: 1 }
*/
const fruitArray = ["apple", "banana", "apple", "orange", "banana", "apple", "lime"]
let result = {}
for (let i = 0; i < fruitArray.length; i++) {
    if (!result[fruitArray[i]]) {
        result[fruitArray[i]] = 0
    }
    result[fruitArray[i]]++
}
console.log(result)

/* 3 Swap keys and values of object
Input : { a: "x", b: "y", c: "z" }
Output : { x: "a", y: "b", z: "c" }
*/
const toSwap = { a: "x", b: "y", c: "z" }
let swap = {}
for (let [key, value] of Object.entries(toSwap)) {
    swap[value] = key
}
console.log(swap)

/* 4 Find the largest value key
Input : { a: 10, b: 50, c: 20 }
Output : 50
*/
const findLargest = { a: 100, b: 50, c: 2000 }
let largestValue = -9999
let largestKey
for (let [key, value] of Object.entries(findLargest)) {
    if (value > largestValue) {
        largestKey = key
        largestValue = value
    }
}
console.log(largestKey)

/* 5 Flatten object of arrays into one array
Input : { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
Output: ["apple", "banana", "carrot", "pea"]
*/
const items = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
let itemsArr = []
for (let [key, value] of Object.entries(items)) {
    itemsArr.push(value)
}
console.log(itemsArr.flat())

/* 6 Group people by city
Input : [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]
Output: { Delhi: ["A", "C"], Mumbai: ["B"] }
*/
const city = [
    { name: "A", city: "Delhi" },
    { name: "B", city: "Mumbai" },
    { name: "C", city: "Delhi" }
]
let groupByCity = {}
for (let i = 0; i < city.length; i++) {
    if (!groupByCity[city[i].city]) {
        groupByCity[city[i].city] = []
    }
    groupByCity[city[i].city].push(city[i].name)
}
console.log(groupByCity)

/* 7 Filter object by values > 50
Input : { a: 20, b: 60, c: 40, d: 90 }
Output : { b: 60, d: 90 }
*/
const input7 = { a: 20, b: 60, c: 40, d: 90 }
const output7 = {}
for (let [key, value] of Object.entries(input7)) {
    if (value > 50) {
        output7[key] = value
    }
}
console.log(output7)

/* 8 Find student with highest average mark
Input : { A: [80, 90], B: [70, 75, 85] }
Output: A
*/
const input8 = { A: [80, 90], B: [70, 75, 85] }
let output8, average = 0
for (let [key, value] of Object.entries(input8)) {
    let currentAverage = value.reduce((value, sum) => sum + value, 0);
    currentAverage = Math.floor(currentAverage / value.length)
    if (average < currentAverage) {
        average = currentAverage
        output8 = key
    }
}
console.log(output8)

/* 9 Unique values across all object arrays
Input : { x: [1,2,3], y: [2,3,4], z: [4,5] }
Output: [1,2,3,4,5]
*/
const input9 = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] }
let output9 = []
for (const value of Object.values(input9)) {
    value.map((val) => {
        if (!output9.includes(val)) {
            output9.push(val)
        }
    })
}
console.log(output9)

/* 10 Pick only given keys from object
Input: { name: "Rahul", age: 23, city: "Noida" }, ["name","city"]
Output: { name: "Rahul", city: "Noida" }
*/
const input10 = { name: "Rahul", age: 23, city: "Noida" }
const include = ["name", "city"]
let output10 = {}
for (const [key, value] of Object.entries(input10)) {
    if (include.includes(key)) {
        output10[key] = value
    }
}
console.log(output10)

// 11 Skipped (same as 8. see above)

/* 12 Sort object entries by values (ascending)
Input : { a: 3, b: 1, c: 2 }
Output: [["b",1], ["c",2], ["a",3]]
*/
const input12 = { a: 3, b: 1, c: 2 }
let output12 = []
for (const [key, value] of Object.entries(input12)) {
    output12.push([key, value])
}
output12.sort((item1, item2) => item1[1] - item2[1])
console.log(output12)

/* 13 Count number of keys in object
Input : { a: 1, b: 2, c: 3 }
Output  : 3
*/
const input13 = { a: 1, b: 2, c: 3 }
console.log(Object.keys(input13).length)

/* 14 Capitalize string values inside object
Input : { name: "alice", city: "delhi" }
Output : { name: "Alice", city: "Delhi" }
*/
const input14 = { name: "alice", city: "delhi" }
let output14 = {}
for (const [key, value] of Object.entries(input14)) {
    let stringValue = value
    stringValue = value[0].toUpperCase() + value.slice(1)
    output14[key] = stringValue
}
console.log(output14)

/* 15 Convert object to query string
Input: { name: "Alice", age: 25 }
Output: "name=Alice&age=25"
*/
const input15 = { name: "Alice", age: 25 }
let output15 = ""
for (const [key, value] of Object.entries(input15)) {
    output15 = output15 + `${key}=${value}&`
}
output15 = output15.slice(0, output15.length - 1)
console.log(output15)

/* 16 Count even and odd numbers in array
Input: [1,2,3,4,5,6]
Output: { even: 3, odd: 3 }
*/
const input16 = [1, 2, 3, 4, 5, 6]
let output16 = { even: 0, odd: 0 }
for (const val of input16) {
    if (val % 2 == 0) {
        output16["even"]++
    } else {
        output16["odd"]++
    }
}
console.log(output16)

/* 17 Find common keys between two objects
Input : { a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }
Output : ["b","c"]
*/
const input17_1 = { a: 1, b: 2, c: 3}
const input17_2 = { b: 4, c: 5, d: 6}
let output17 = []
for(const key of Object.keys(input17_1)){
    if(input17_2[key]){
        output17.push(key)
    }
}
console.log(output17)

/* 18 Convert array of objects to lookup by id
Input: [{ id: 1, name: "A" }, { id: 2, name: "B" }]
Output : { 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }
*/
const input18 = [{ id: 1, name: "A" }, { id: 2, name: "B" }]
let output18 = {}
for(let obj of input18){
    output18[obj.id] = {"id" : obj.id, "name": obj.name}
}
console.log(output18)

/* 19 Check if all values in object are numbers
Input : { a: 1, b: "hello", c: 3 }
Output: false
*/
const input19 = { a: 1, b: "hello", c: 3 }
let output19 = true
for(const val of Object.values(input19)){
    if(isNaN(val)){
        output19 = false
        break
    }
}
console.log(output19)

