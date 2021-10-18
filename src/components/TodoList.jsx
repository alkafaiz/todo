import React from 'react';
import { useTodo } from '../helper/TodoContext';
import TodoCard from './TodoCard';

function TodoList() {
    const { details } = useTodo();
    return (
        <div className="grid grid-cols-1 gap-4">
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
