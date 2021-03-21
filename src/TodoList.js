import React from 'react';
import ToDo from "./Todo";

export default function TodoList({todos, toggleTodo}){
    return(
        todos.map(todo =>{
            return <ToDo key = {todo.id} toggleTodo={toggleTodo} todo ={todo} />
    }))

}