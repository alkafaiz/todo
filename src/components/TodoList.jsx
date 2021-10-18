import React from 'react';
import { useTodo } from '../helper/TodoContext';
import TodoCard from './TodoCard';

function TodoList() {
    const { details } = useTodo();
    return (
        <div className="flex flex-col">
            {!details.items.length && <span data-cy="todo-empty-state">Tidak ada list item</span>}
            {details.items.map((todo) => (
                <TodoCard
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    priority={todo.priority}
                    isActive={todo.is_active}
                />
            ))}
        </div>
    );
}

export default TodoList;
