// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs')

const fileData = fs.readFileSync('read.txt', 'utf-8', (err) => {
    if(err){
        console.log('Error while reading file: ', err)
        return
    }
   
})

const data =fileData  + '\n\n\nThe evening sun slipped quietly behind the distant hills, leaving the sky painted in shades of amber and rose. A gentle breeze wandered through the silent streets, carrying with it the faint scent of blooming jasmine. She stood by the window, lost in thought, watching shadows stretch across the fading light. Each passing moment seemed to whisper memories of days long gone—of laughter, dreams, and promises once spoken with certainty. Time, she realized, was both a healer and a thief, granting peace while stealing youth. Yet within her heart, hope remained untouched, glowing softly like a candle in the dark. No matter how heavy the past felt, tomorrow still waited patiently, offering another chance to begin again.'

fs.writeFile("read.txt", data, 'utf-8', (err) => {
    if(err){
        console.log("Error while writing to file: ", err)
        return
    }
    console.log("File written successfully!!")
})

