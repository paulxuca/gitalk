require('typeface-nunito');

import Inferno from 'inferno';
import App from './App';

window.initGitalk = (endpoint, options) => {
    Inferno.render(
      <App opts={{endpoint, options}} />,
      document.getElementById('app-gitalk')
    );
};
