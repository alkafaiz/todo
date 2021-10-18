import React, { useContext, useState } from 'react';
import { getTodo } from '../services/appService';
import { parseBooleanFromBinary, sortItem } from './utilities';

const TodoContext = React.createContext();
const RefreshTodoContext = React.createContext();
const SortItemContext = React.createContext();

export function useTodo() {
    return useContext(TodoContext);
}

export function useRefreshTodo() {
    return useContext(RefreshTodoContext);
}

export function useSortTodo() {
    return useContext(SortItemContext);
}

const initialValue = { details: { id: '', title: '', items: [] }, isLoading: true };

export function TodoProvider({ children }) {
    const [todo, setTodo] = useState(initialValue);

    async function loadTodo(id) {
        try {
            const todo = await getTodo(id);
            setTodo({
                details: {
                    id: todo.id,
                    title: todo.title,
                    items: todo.todo_items.map((item) => ({
                        ...item,
                        is_active: parseBooleanFromBinary(item.is_active),
                    })),
                },
                isLoading: false,
            });
        } catch (error) {
            setTodo((prev) => ({ ...prev, isLoading: false }));
        }
    }

    const replaceItems = (items) => {
        setTodo((prev) => ({ ...prev, details: { ...prev.details, items } }));
    };

    function sort(order) {
        const items = sortItem(order, [...todo.details.items]);
        replaceItems(items);
    }

    return (
        <TodoContext.Provider value={todo}>
            <RefreshTodoContext.Provider value={loadTodo}>
                <SortItemContext.Provider value={sort}> {children}</SortItemContext.Provider>
            </RefreshTodoContext.Provider>
        </TodoContext.Provider>
    );
}
