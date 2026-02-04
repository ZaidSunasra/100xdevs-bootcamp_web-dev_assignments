// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs')

const rawText = fs.readFileSync("uncleaned.txt", "utf-8", (err) => {
    if(err){
        console.log("Erorr while reading file: ", err)
        return
    }
})

const cleanText = rawText.replace(/\s+/g, ' ');

fs.writeFile("cleaned.txt", cleanText, "utf8" , (err) => {
    if(err){
        console.log("Erorr while writing to file: ", err)
        return
    }
    console.log("File written successfully!!")
})