// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// setInterval(() => {
//   
// }, 1000)

function print12Hours () {
    const date = new Date()
    let meridiemIndicator = date.getHours() > 12 ? "PM" : "AM"
    let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    console.log(`${hour}:${date.getMinutes()}::${date.getSeconds()}  ${meridiemIndicator}`)
} 

function print24Hours () {
    const date = new Date()
    console.log(`${date.getHours()}:${date.getMinutes()}::${date.getSeconds()}`)
} 

setInterval(print12Hours, 1000)
setInterval(print24Hours, 1000)