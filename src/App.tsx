import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { Todo } from './components/model';
import { DragDropContext } from 'react-beautiful-dnd'; 

// let name: string;
// name = 'Toluwani'
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];
// role = [2, 'Ade']

// type Person = {
//   name: string;
//   age: number;
// }

// type X = Person & {
//   dob: string;
//   faith: string;
// }

// interface interPerson {
//   gender: string;
//   address: number;
// }

// interface Y extends interPerson {
//   dob: string;
//   faith: string;
// }



// let person: Person = {
//   name: "Olumide",
//   age: 20
// }

// let lotsOfPeople : Person[];

// let printName: (name: string) => void
// let noReturn: (name: string) => never

// // function printName (name: string){
// //  console.log(name); 
// // }

// let personName: unknown;

// // printName('Adeola')

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      setTodo("");
      console.log("Todos Set")
    }
  } 
  console.log(todo);
  console.log(todos);

  return (
    <DragDropContext onDragEnd= {() => {}}>
  <div className="App">
      <span className="heading">  Taskify</span>
      <InputField todo={todo} setTodo = {setTodo} handleAdd = {(e) => handleAdd(e)}  />
      {/* <TodoList/> */}
        <TodoList todos = {todos} setTodos = {setTodos} completedTodos= {completedTodos} setCompletedTodos = {setCompletedTodos}/>
    </div>
    </DragDropContext>
  )
}

export default App;
