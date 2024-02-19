 const {
     exec
 } = require("node:child_process")
 exec('node -v', (err, stdout) => {
     if (err) {
         return err
     }
     console.log(stdout)
 })