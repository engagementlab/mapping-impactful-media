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

            // Move through all nested vals in result and replace newlines w/ break tag
            Object.keys(data).forEach(model => {
                data[model].forEach(fields => {
                    Object.keys(fields).forEach(field => {

                        fields[field] = fields[field].replace(/(\r\n|\n|\r)/gm, '<br />');
                    })
                })
            })

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