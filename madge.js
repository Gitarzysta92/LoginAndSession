const madge = require('madge');
 
madge('index.js').then((res) => {
    console.log(res.circular());
});