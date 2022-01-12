"use strict";
exports.__esModule = true;
/*import axios from 'axios';
const url='https://jsonplaceholder.typicode.com/todos/1';
axios.get(url)
   .then (
       response => {
           console.log(response.data);
       }
   );
*/
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url)
    .then(function (response) {
    var todo = response.data;
    var ID = todo.ID;
    var title = todo.Title;
    var finished = todo.finished;
    console.log("\n               El todo amb id:".concat(ID, "\n               T\u00E9 per t\u00EDtol: ").concat(title, "\n               i est\u00E0 acabat? ").concat(finished, "\n           "));
});
