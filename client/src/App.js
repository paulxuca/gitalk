import Inferno from 'inferno';
import classnames from 'classnames';
import Component from 'inferno-component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.gitalk = window.gitalk;
    
    this.state = {
      messageContainerOpen: false
    };
  }

  toggleMessageContainer = () => this.setState({ messageContainerOpen: !this.state.messageContainerOpen });

  render() {
    const classes = {
      message__container: classnames({
        'message__container': true,
        'active': this.state.messageContainerOpen
      })
    };

    return (
      <div className="app__container">
        <div className={classes.message__container}>
          <div className="message__container-header">

          </div>
        </div>
        <button onClick={this.toggleMessageContainer} className="message__container-toggle">Chat</button>
      </div>
    );
  }
}

export default App;
