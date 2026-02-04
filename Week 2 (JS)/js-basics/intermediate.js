/* 1 Sum all transactions per user
Input : [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
]
Output : { A: 150, B: 200 }
*/
const input1 = [
    { user: "A", amount: 100 },
    { user: "B", amount: 200 },
    { user: "A", amount: 50 }
]
let output1 = {}
for (const obj of input1) {
    if (!output1[obj.user]) {
        output1[obj.user] = 0
    }
    output1[obj.user] += obj.amount
}
console.log(output1)

/* 2 Transform API response to object (id → name)
Input : [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]
Output: { 1: "Alice", 2: "Bob" }
*/
const input2 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
]
let output2 = {}
for (const obj of input2) {
    output2[obj.id] = obj.name
}
console.log(output2)

/* 3 Remove falsy values from object
Input : { a: 0, b: null, c: "hello", d: undefined, e: 5 }
Output : { c: "hello", e: 5 }
*/
const input3 = { a: 0, b: null, c: "hello", d: undefined, e: 5 }
let output3 = {}
for (const [key, value] of Object.entries(input3)) {
    if (value) {
        output3[key] = value
    }
}
console.log(output3)

/* 4 Check for permissions from roles
Input : roles={ admin:["read","write"], user:["read"], staff: ["write"]}
checkRole="user",
action="write"
Output : false
*/
const input4 = { admin: ["read", "write"], user: ["read"], staff: ["write"] }
const checkRole = "user"
const action = "write"
let output4
if (input4[checkRole].includes(action)) {
    output4 = true
} else {
    output4 = false
}
console.log(output4)

/* 5 Transform array of orders into revenue per category
Input : [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
]
Output : { electronics: 300, clothes: 50 }
*/
const input5 = [
    { id: 1, category: "electronics", price: 100 },
    { id: 2, category: "clothes", price: 50 },
    { id: 3, category: "electronics", price: 200 }
]
const output5 = {}
for (const obj of input5) {
    if (!output5[obj.category]) {
        output5[obj.category] = 0
    }
    output5[obj.category] += obj.price
}
console.log(output5)

/* 6 Remove duplicate objects by id
Input : [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
]
Output : [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
]
*/
const input6 = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" }
]
let output6 = []
for (const obj of input6) {
    if (!output6[obj.id]) {
        output6.push(obj)
    }
}
console.log(output6)

/* 7 Chunk object entries into groups of size
Input : { a: 1, b: 2, c: 3, d: 4 }, size=2
Output : [ [["a",1],["b",2]], [["c",3],["d",4]] ]
*/
const input7 = { a: 1, b: 2, c: 3, d: 4 }
const size7 = 2
let output7 = []
let count = 0
let tempArr = []
for (const [key, value] of Object.entries(input7)) {
    tempArr.push([key, value])
    count++
    if (count == size7) {
        output7.push(tempArr)
        tempArr = []
        count = 0
    }
}
if (count) output7.push(tempArr)
console.log(output7)

/* 8 Find longest string among object values
Input : { a: "apple", b: "banana", c: "kiwi" }
Output : banana
*/
const input8 = { a: "apple", b: "banana", c: "kiwi" }
let output8 = ''
for (const value of Object.values(input8)) {
    if (value.length > output8.length) {
        output8 = value
    }
}
console.log(output8)

/* 9 Convert the object where languages are the top-level keys, and inside each are translation strings by key into an object where translation keys are the top-level keys, and inside each you store values per language 
Input : {
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" }
}
Output : {
  hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
  bye: { en: "Goodbye", fr: "Au revoir" }
}
*/
const input9 = {
    en: { hello: "Hello", bye: "Goodbye" },
    fr: { hello: "Bonjour", bye: "Au revoir" },
    es: { hello: "Hola" }
}
let output9 = {}
for (const [language, translation] of Object.entries(input9)) {
    for (const [key, value] of Object.entries(translation)) {
        if (!output9[key]) {
            output9[key] = {}
        }
        output9[key][language] = value
    }
}
console.log(output9)

/* 10 Build index of ids grouped by category
Input : [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
]
Output : { fruit: [1,3], veggie: [2] }
*/
const input10 = [
    { id: 1, category: "fruit" },
    { id: 2, category: "veggie" },
    { id: 3, category: "fruit" }
]
let output10 = {}
for (const obj of input10) {
    if (!output10[obj.category]) {
        output10[obj.category] = []
    }
    output10[obj.category].push(obj.id)
}
console.log(output10)

/* 11 Remove deeply nested key from object
Output : { a: { b: { c: 1, d: 2 } } }, remove "c"
Input : { a: { b: { d: 2 }, e: 5} }
*/
const input11 = { a: { b: { c: 1, d: 2 } } }
const toRemove = "c"
function nestedObject(obj) {
    for (const [key, value] of Object.entries(obj)) {
        if (key == toRemove) {
            delete obj[key]
            return
        }
        if (typeof value === 'object') {
            nestedObject(value)
        }
    }
}
nestedObject(input11)
console.log(input11)

/* 12 Check if two objects are deeply equal
Input : { a: { x: 1, y: 2 } }, { a: { x: 1, y: 2 } }
Output : true
*/
const input12_1 = { a: { x: 1, y: 2 } }
const input12_2 = { a: { x: 1, y: 2 } }
console.log(JSON.stringify(input12_1) == JSON.stringify(input12_2))

/* 13 Deep flatten nested arrays inside object
Input : { a: [1, [2, [3]]], b: [4, [5]] }
Output: { a: [1,2,3], b: [4,5] }
*/
const input13 = { a: [1, [2, [3]]], b: [4, [5]] }
let output13 = {}
for (const [key, value] of Object.entries(input13)) {
    output13[key] = value.flat(Infinity)
}
console.log(output13)

/* 14 Find most repeated word across categories
Input : { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }
Output : apple
*/
const input14 = { fruits: ["apple", "apple", "banana"], drinks: ["apple", "tea"] }
let output14, maxCount14 = 0
let countMap14 = new Map()
for (const value of Object.values(input14)) {
    for (const val of value) {
        if (!countMap14.get(val)) {
            countMap14.set(val, 0)
        }
        countMap14.set(val, countMap14.get(val) + 1)
    }
}
for (const i of countMap14) {
    if (i[1] > maxCount14) {
        output14 = i[0]
        maxCount14 = i[1]
    }
}
console.log(output14)

/* 15 Find intersection of all arrays in object
Input : { a: [1,2,3], b: [2,3,4], c: [3,4,5] }
Output : [3]
*/
const input15 = { a: [1, 2, 3], b: [2, 3, 4], c: [3, 4, 5] }
let output15 = []
let countMap15 = new Map()
for (const values of Object.values(input15)) {
    for (const value of values) {
        if (!countMap15.get(value)) {
            countMap15.set(value, 0)
        }
        countMap15.set(value, countMap15.get(value) + 1)
    }
}
for (const index of countMap15) {
    if (index[1] >= Object.keys(input15).length) {
        output15.push(index[0])
    }
}
console.log(output15)

/* 16 Deep merge two nested objects
Input : { a: { x: 1, y: 2 } }, { a: { y: 3, z: 4 } }
Output : { a: { x: 1, y: 3, z: 4 } }
*/
const input16_1 = { a: { x: 1, y: 2 } }
const input16_2 = { a: { y: 3, z: 4 } }
let output16 = {}
for (const [key1, obj] of Object.entries(input16_1)) {
    for (const [key, value] of Object.entries(obj)) {
        if (!output16[key1]) {
            output16[key1] = {}
        }
        output16[key1][key] = value
    }
}
for (const [key1, obj] of Object.entries(input16_2)) {
    for (const [key, value] of Object.entries(obj)) {
        if (!output16[key1]) {
            output16[key1] = {}
        }
        output16[key1][key] = value
    }
}
console.log(output16)

/* 17 Nested object destructuring
Input : { user: { profile: { name: "Alice", age: 25 } } }
Output : Alice 25
*/
const input17 = { user: { profile: { name: "Alice", age: 25 } } }
let output17 = ''
function nestedObjectPrint(obj) {
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object') {
            nestedObjectPrint(value)
        } else {
            output17 = output17 + value + " "
        }
    }
}
nestedObjectPrint(input17)
console.log(output17)

/* 18 Find top N keys by value
Input : { a: 10, b: 50, c: 30, d: 40 }, N=2
Output : ["b","d"]
*/
const input18 = { a: 10, b: 50, c: 30, d: 40 }
const n18 = 2
let output18 = Object.entries(input18).sort((item1, item2) => item2[1] - item1[1]).slice(0, 2).map(item => item[0])
console.log(output18)

/* 19 Sort array of objects by name then age
Input : [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 }
]
Output : [
  { name: "Alice", age: 22 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 }
]
*/
const input19 = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Alice", age: 22 }
]
let output19 = input19.sort((a, b) => {
    if (a.name !== b.name) {
        return a.name.localeCompare(b.name)
    }
    return a.age - b.age
})
console.log(output19)

/* 20 Reconcile two lists (missing + extra items)
Input : expected:["a","b","c"] , actual:["b","c","d"]
Output : { missing:["a"], extra:["d"] } 
*/
const input20_expected = ["a", "b", "c"]
const input20_actual = ["b", "c", "d"]
let output20 = {}
let i = 0
while (i < input20_actual.length) {
    if (input20_expected.includes(input20_actual[i])) {
        const index = input20_expected.indexOf(input20_actual[i])
        input20_actual.splice(i, 1)
        input20_expected.splice(index, 1)
    } else {
        i++
    }
}
output20["missing"] = input20_expected
output20["extra"] = input20_actual
console.log(output20)

/* 21 Merge two objects (no sum, override second)
Input : { a: 10, b: 20 }
{ a: 5, c: 15 }
Output : { a: 5, b: 20, c: 15 }
*/
const input21_1 = { a: 10, b: 20 }
const input21_2 = { a: 5, c: 15 }
let output21 = {}
for(const [key, value] of Object.entries(input21_1)){
    output21[key] = value
}
for(const [key, value] of Object.entries(input21_2)){
    output21[key] = value
}
console.log(output21)