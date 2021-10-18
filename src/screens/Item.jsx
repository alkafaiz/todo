import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddTodoItem from '../components/AddTodoItem';
import ItemTitle from '../components/ItemTitle';
import TodoList from '../components/TodoList';
import { TodoProvider, useRefreshTodo, useTodo } from '../helper/TodoContext';

function Item() {
    const params = useParams();
    const { details, isLoading } = useTodo();
    const refreshTodo = useRefreshTodo();

    useEffect(() => {
        initializeTodo(); // eslint-disable-next-line
    }, []);

    function initializeTodo() {
        if (params.id) {
            refreshTodo(params.id);
        }
    }

    if (isLoading) return 'Loading...';

    if (!details.id) return 'Todo is not found';

    return (
        <div className="py-8">
            <div className="mb-5 flex justify-between items-center">
                <ItemTitle title={details.title} />
                <AddTodoItem />
            </div>
            <TodoList />
        </div>
    );
}

function WrappedItem() {
    return (
        <TodoProvider>
            <Item />
        </TodoProvider>
    );
}
export default WrappedItem;
