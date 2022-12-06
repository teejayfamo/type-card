import React, { useEffect, useRef, useState } from 'react';
import { Todo } from './model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import "./styles.css";
// import TodoList from './TodoList';
import { Draggable } from 'react-beautiful-dnd';

interface Props {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos?: Todo[];
    setCompletedTodos?: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ index, todo, todos, setTodos, setCompletedTodos }: Props) => {
    const [ edit, setEdit ]  = useState<boolean>(false)
    const [ editTodo, setEditTodo ] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => todo.id === id? {...todo, todo: editTodo }: todo))
        setEdit(false)
    }
    
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus()
    }, [edit]
    )

    return (
    <Draggable draggableId = {todo.id.toString()} index = {index}> 
        {(provider) => (
            <form className="todos__single" onSubmit={(e)=> handleEdit(e, todo.id)}
            {...provider.draggableProps}
            {...provider.dragHandleProps}
            ref = {provider.innerRef}>
        {
            edit? <input ref = {inputRef} value = {editTodo} onChange={(e) => setEditTodo(e.target.value)} className = "todos__single--text"/>
            : ((todo.isDone) ?
                <s className="todos__single--text">{todo.todo}</s>
                : <span className="todos__single--text">{todo.todo}</span>
            )
        } 
        
        <div>
            <span className="icon"
                onClick={() => { if (!edit && !todo.isDone){ setEdit(true) } }}>
                <AiFillEdit />
            </span>
            <span className="icon">
                <AiFillDelete onClick={() => handleDelete(todo.id)} />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdDone />
            </span>
        </div>

    </form>
        )}

    
    </Draggable>
    )};

export default SingleTodo; 