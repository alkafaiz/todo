import React, { useContext, useState } from 'react';
import { getTodo } from '../services/appService';

const TodoContext = React.createContext();
const RefreshTodoContext = React.createContext();

export function useTodo() {
    return useContext(TodoContext);
}

export function useRefreshTodo() {
    return useContext(RefreshTodoContext);
}

const initialValue = { details: { id: '', title: '', items: [] }, isLoading: true };

export function TodoProvider({ children }) {
    const [todo, setTodo] = useState(initialValue);

    async function loadTodo(id) {
        const todo = await getTodo(id);
        console.log(todo);
        setTodo({
            details: {
                id: todo.id,
                title: todo.title,
                items: todo.todo_items,
            },
            isLoading: false,
        });
    }

    return (
        <TodoContext.Provider value={todo}>
            <RefreshTodoContext.Provider value={loadTodo}>{children}</RefreshTodoContext.Provider>
        </TodoContext.Provider>
    );
}
