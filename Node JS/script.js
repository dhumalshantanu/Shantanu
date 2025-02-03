const fs = require('fs');

// fs.writeFile("File1.txt", "Hello My name is Shantanu Kiran Dhumal : ", function err() {
//     if(err) console.log(err);
//     else console.log("Done");
// })

fs.appendFile("File1.txt", "Currently i'm Persuing my BTech Degree from Pimpri Chinchwad University : ", function err() {
    if(err) console.log(err);
    else console.log("Done");
})