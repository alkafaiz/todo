import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import AddTodoItem from '../components/AddTodoItem';
import ChevronLeftIcon from '../components/ChevronLeftIcon';
import IconButton from '../components/IconButton';
import TodoList from '../components/TodoList';
import { TodoProvider, useRefreshTodo, useTodo } from '../helper/TodoContext';

function Item() {
    const params = useParams();
    const history = useHistory();
    const { details, isLoading } = useTodo();
    const refreshTodo = useRefreshTodo();

    useEffect(() => {
        initializeTodo();
    }, []);

    function initializeTodo() {
        console.log(params);
        if (params.id) {
            refreshTodo(params.id);
        }
    }

    useEffect(() => {
        console.log(details);
    }, [details]);

    const handleReturn = () => {
        history.push('/');
    };

    if (isLoading) return 'Loading...';

    if (!details.id) return 'Todo is not found';

    return (
        <div className="py-8">
            <div className="mb-5 flex justify-between items-center">
                <div className="flex items-center">
                    <IconButton onClick={handleReturn} icon={<ChevronLeftIcon />} size="small" />
                    <h2 className="ml-3 text-3xl font-bold">{details.title}</h2>
                </div>
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
