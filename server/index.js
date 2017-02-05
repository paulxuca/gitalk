// Load github env variables
require('dotenv').config();

// Taken from https://github.com/vadimdemedes/ohcrash
const token = process.env.GITHUB_TOKEN;
const user = process.env.GITHUB_USER;
const repo = process.env.GITHUB_REPO;


if (!token) throw new TypeError('GitHub token is required. Set `GITHUB_TOKEN` environment variable.');
if (!user) throw new TypeError('GitHub user name is required. Set `GITHUB_USER` environment variable.');
if (!repo) throw new TypeError('GitHub repository name is required. Set `GITHUB_REPO` environment variable.');

module.exports = async (req, res) => {

}