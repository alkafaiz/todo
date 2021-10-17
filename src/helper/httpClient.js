async function get(url) {
    try {
        const data = await fetch(url).then((response) => response.json());
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

async function remove(url) {
    try {
        const data = await fetch(url, { method: 'DELETE' }).then((response) => response.json());
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

async function post(url, payload) {
    try {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = { method: 'POST', headers, body: JSON.stringify(payload) };
        const data = await fetch(url, options).then((response) => response.json());
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

const httpClient = { get, remove, post };

export default httpClient;
