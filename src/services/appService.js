import { EMAIL_ID, END_POINTS } from '../helper/constants';
import httpClient from '../helper/httpClient';

export async function getActivities() {
    try {
        const data = await httpClient.get(`${END_POINTS.activity.href}?email=${EMAIL_ID}`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteActivity(id) {
    try {
        const data = await httpClient.remove(`${END_POINTS.activity.href}/${id}`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function createActivity(name) {
    try {
        const payload = { title: name, email: EMAIL_ID };
        const data = await httpClient.post(END_POINTS.activity.href, payload);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getTodo(id) {
    try {
        const data = await httpClient.get(`${END_POINTS.activity.href}/${id}`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function createTodoItem(activityId, name, priority) {
    try {
        const payload = { title: name, activity_group_id: activityId, priority };
        const data = await httpClient.post(END_POINTS.todoItem.href, payload);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function updateTodoItem(itemId, payload) {
    try {
        const data = await httpClient.patch(`${END_POINTS.todoItem.href}/${itemId}`, payload);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function updateActivity(activityId, payload) {
    try {
        const data = await httpClient.patch(`${END_POINTS.activity.href}/${activityId}`, payload);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteTodoItem(id) {
    try {
        const data = await httpClient.remove(`${END_POINTS.todoItem.href}/${id}`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
