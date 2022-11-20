import React from "react";
//import components
import Todo from './Todo';


const ToDoList = ({ todos, setTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;