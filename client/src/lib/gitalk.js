class Gitalk {
    constructor(endpoint, options = {}) {
        if (!endpoint) throw new Error('Endpoint is required');
        this.endpoint = endpoint;
    }
}

export default Gitalk;