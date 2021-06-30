// eslint-disable-next-line import/prefer-default-export
export async function getContent(fetch, query, key) {
  try {
    const res = await fetch(`api/${key}`, {
      method: 'POST',
      body: query,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }

    return {
      status: res.status,
      error: new Error(`API error: ${res.json()}`),
    };
  } catch (e) {
    console.error(`API error: ${e}`);
  }
}
