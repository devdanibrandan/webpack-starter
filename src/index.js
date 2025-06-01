import './styles.css';

//Buscara el index.js por defecto
import{ Todo,TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export  const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );

console.log('Todos', todoList.todos);


// const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo( newTodo );



