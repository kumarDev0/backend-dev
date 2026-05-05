// Thread  , i want to use and create and check how they works practically
const { Worker } = require('worker_threads');

new Worker('./a.js');  // ✅
new Worker('./b.js');  // ✅
new Worker('./c.js');  // ✅
