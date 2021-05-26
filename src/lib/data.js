export async function getContent(fetch, query) {
    try {
        const res = await fetch('api', {
            method: 'POST',
            body: query,
            headers: {
                'content-type': 'text/plain',
            },
        });
        if (res.ok) {
            const data = await res.json();
            
            return data;
        }

        return {
            status: res.status,
            error: new Error(`Could not load ${url}`)
        };
    } catch (e) {
        console.error('error: ' + e);
    }
}