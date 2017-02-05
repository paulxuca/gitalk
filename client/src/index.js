import Inferno from 'inferno';
import App from './App';
import Gitalk from './lib/gitalk';

const initApp = () => {
  Inferno.render(<App />, document.getElementById('app-gitalk'));
};

window.initGitalk = (endpoint, options) => {
  window.gitalk = new Gitalk(endpoint, options);
  initApp();
}