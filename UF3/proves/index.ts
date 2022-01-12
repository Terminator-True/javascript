/*import axios from 'axios';
const url='https://jsonplaceholder.typicode.com/todos/1';
axios.get(url)
   .then (
       response => {
           console.log(response.data);
       }
   );
*/
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url)
   .then(
       response => {
           const todo = response.data;
           const ID = todo.ID;
           const title = todo.Title;
           const finished = todo.finished;
           console.log(`
               El todo amb id:${ID}
               Té per títol: ${title}
               i està acabat? ${finished}
           `);
       }
   );
