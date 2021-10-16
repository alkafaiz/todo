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
