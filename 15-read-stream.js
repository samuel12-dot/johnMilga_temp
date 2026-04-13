const { createReadStream } = require("fs");

const stream = createReadStream("./content/big-file.txt");

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
    console.log(err)
} )

//default 64kb
//last buffer -> remainder
//highWaterMark -> control size
/*const stream = createReadStream("./content/big-file.txt", {
  highWaterMark: 90000,
});
*/

/*const stream = createReadStream("./content/big-file.txt", {
    encoding: "utf-8"
})
*/