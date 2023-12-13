const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');


let graph = [];
assert(hasCycle(graph) == false);

let graph2 = [  [1],
                [0, 3],
                [0, 1],
                [0, 1, 3]
             ];
assert(hasCycle(graph2) == true);


let graph3 = [  [1],
                [2, 3],
                [3],
                []
             ];          
assert(hasCycle(graph3) == false);

let graph4 = [  [2],
                [1, 3],
                [0, 1, 3],
                []
             ]
assert(hasCycle(graph4) == true);
