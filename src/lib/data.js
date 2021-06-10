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

            // Move through all nested vals in result and replace newlines w/ break tag;
            // this is so text will look correct when passed through markdown->html renderer
            Object.keys(data).forEach(model => {
                data[model].forEach(fields => {
                    
                    Object.keys(fields).forEach(field => {
                        // Check if string
                        if(typeof fields[field] === 'string')
                            fields[field] = fields[field].replace(/(\r\n|\n|\r)/gm, '<br />');
                    })
                })
            })

            return data;
        }

        return {
            status: res.status,
            error: new Error(`API error: ${res.json()}`)
        };
    } catch (e) {
        console.error(`API error: ${e}`);
    }
}