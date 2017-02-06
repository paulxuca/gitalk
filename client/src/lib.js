import 'whatwg-fetch';

const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getItem = (key) => localStorage.getItem(key);

export const post = (body, endpoint) => fetch(endpoint, {
    method: 'POST',
    body
}).then(data => data.json());

export const init = async (endpoint) => {
    if (!getItem('gitalk')) {
        setItem('gitalk', {
            init: true
        });
    }
    const data = await post(getItem('gitalk'), endpoint);
    setItem('gitalk', data);
    return data;
};
