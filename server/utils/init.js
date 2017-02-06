const uuid = require('node-uuid');
const project = require('../project.json');

module.exports = (body) => {
    const uniqueId = uuid();

    return {
        id: uniqueId,
        init: false,
        meta: project,
        conversations: {}
    };
}