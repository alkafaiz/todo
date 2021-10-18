import { handleErrors } from './errorHandler';

async function get(url) {
    const data = await fetch(url)
        .then(handleErrors)
        .then((response) => response.json())
        .catch(function (error) {
            throw new Error(error);
        });
    return data;
}

async function remove(url) {
    const data = await fetch(url, { method: 'DELETE' })
        .then(handleErrors)
        .then((response) => response.json())
        .catch(function (error) {
            throw new Error(error);
        });
    return data;
}

async function post(url, payload) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const options = { method: 'POST', headers, body: JSON.stringify(payload) };
    const data = await fetch(url, options)
        .then(handleErrors)
        .then((response) => response.json())
        .catch(function (error) {
            throw new Error(error);
        });

    return data;
}

async function patch(url, payload) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const options = { method: 'PATCH', headers, body: JSON.stringify(payload) };
    const data = await fetch(url, options)
        .then(handleErrors)
        .then((response) => response.json())
        .catch(function (error) {
            throw new Error(error);
        });

    return data;
}

const httpClient = { get, remove, post, patch };

export default httpClient;
