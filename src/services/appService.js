import { END_POINTS } from '../helper/constants';
import httpClient from '../helper/httpClient';

export async function getActivities() {
    try {
        const data = await httpClient.get(END_POINTS.activity.href);
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
        const payload = { title: name };
        const data = await httpClient.post(END_POINTS.activity.href, payload);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
