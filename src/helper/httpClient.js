async function get(url) {
    try {
        const data = await fetch(url).then((response) => response.json());
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

const httpClient = { get };

export default httpClient;
