import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from './model';
import SingleTodo from './SingleTodo';
import "./styles.css";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos}: Props) => {
    return (
        <div className="todos">
        <Droppable  droppableId ="TodoList">
            { (provided) => (
                <div className="active" ref={provided.innerRef}{...provided.droppableProps}>
                    <span className="group--heading">Active Tasks</span>
                {todos.map((todo, index) => (
                    // <li>{todo.todo}</li>
                    <SingleTodo todo= {todo} 
                    key = {todo.id} 
                    todos = {todos}
                    index = {index}
                    setTodos = {setTodos}/>
                ))}
                </div>
            )}
                </Droppable>
        
        <Droppable droppableId = "TodosRemove">
            {(provided) => (
                <div className="completed" ref = {provided.innerRef}{...provided.droppableProps}>
                <span className="group--heading">Completed Tasks</span>
            { completedTodos.map((todo, index) => (
                // <li>{todo.todo}</li>
                <SingleTodo todo= {todo} 
                key = {todo.id} 
                todos = {todos}
                index = {index}
                setTodos = {setTodos}
                setCompletedTodos = {setCompletedTodos}/>
            ))}
            </div>
            )}
            </Droppable>
        </div>
    );
};


export default TodoList;