import React, { useContext, useState } from 'react';
import { getTodo } from '../services/appService';
import { getSortedItems, parseBooleanFromBinary } from './utilities';

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
    const [sortedItems, setSortedItems] = useState(null);

    async function loadTodo(id) {
        try {
            const todo = await getTodo(id);
            const items = todo.todo_items.map((item) => ({
                ...item,
                is_active: parseBooleanFromBinary(item.is_active),
            }));
            setTodo({
                details: {
                    id: todo.id,
                    title: todo.title,
                    items,
                },
                isLoading: false,
            });
            prepareSortedItems(items);
        } catch (error) {
            setTodo((prev) => ({ ...prev, isLoading: false }));
        }
    }

    function prepareSortedItems(unsortedItems) {
        const allSortedItems = getSortedItems(unsortedItems);
        setSortedItems(allSortedItems);
    }

    const replaceItems = (items) => {
        setTodo((prev) => ({ ...prev, details: { ...prev.details, items } }));
    };

    function sort(order) {
        const items = sortedItems[order];
        replaceItems(items);
    }

    function updateItemState(id, isActive) {
        let newTodo = [...todo.details.items];
        const selectedItemIndex = newTodo.findIndex((item) => item.id === id);
        const item = { ...newTodo[selectedItemIndex], is_active: isActive };
        newTodo.splice(selectedItemIndex, 1, item);
        replaceItems(newTodo);
    }

    const deleteTodo = (id) => {
        const newItems = todo.details.items.filter((item) => item.id !== id);
        replaceItems(newItems);
    };

    return (
        <TodoContext.Provider value={todo}>
            <RefreshTodoContext.Provider
                value={{ refreshTodo: loadTodo, updateTodoStatus: updateItemState, sort: sort, deleteTodo }}
            >
                {children}
            </RefreshTodoContext.Provider>
        </TodoContext.Provider>
    );
}
