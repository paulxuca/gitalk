import Inferno from 'inferno';
import classnames from 'classnames';
import Component from 'inferno-component';

import Message from './message';
import {init} from './lib';
import './App.css';

class App extends Component {
  constructor({opts}) {
    super();

    const {options, endpoint} = opts;
    if (!endpoint) throw new Error('Endpoint is required');

    this.state = {
      messageContainerOpen: false,
      isVisible: false,
      inputValue: '',
      messages: [],      
      endpoint,
      options,
    };

    this.initState();
  }

  toggleMessageContainer = () => this.setState({ messageContainerOpen: !this.state.messageContainerOpen });

  initState = async () => {
    const data = await init(this.state.endpoint);
    this.setState({
      ...data,
      isVisible: true
    });
  }

  handleInputFieldChange = e => this.setState({ inputValue: e.target.value });

  renderInitialMessage() {
    const {meta} = this.state;
    if (meta.initial) {
      return (
        <Message
          content={meta.initial}
          color={meta['text-color']}
          backgroundColor={meta.color}
        />
      );
    }
    return null;
  }

  handleInputKeydown = (e) => {
    const {inputValue} = this.state;
    if (e.keyCode === 13) {
      e.preventDefault();
      this.setState({
        inputValue: ''
      }, () => {
        this.sendMessage(inputValue);
      })
    }
  }

  sendMessage = (message) => {
    this.setState({
      messages: [...this.state.messages, {
        content: message,
        isSent: true,
        date: new Date()
      }]
    });
  }

  renderMessages() {
    return this.state.messages.map(e => {
      return (
        <Message
          content={e.content}
          isSent={e.isSent}
          backgroundColor={this.state.meta.color}
          color={this.state.meta['text-color']}
        />
      );
    });
  }

  renderApp() {
    const classes = {
      message__container: classnames({
        'message__container': true,
        'active': this.state.messageContainerOpen
      }),
      app: classnames({
        'app__container': true,
        'active': this.state.isVisible
      }),
      toggleIcon: classnames({
        'toggleIcon': true,
        'active': this.state.messageContainerOpen
      })
    };

    const {meta} = this.state;

    const highlighted = {
      backgroundColor: meta.color,
      color: meta['text-color']
    };

    return (
      <div className={classes.app}>
        <div className={classes.message__container}>
          <div style={highlighted} className="message__container-header">
            <span className="message__container-title">{meta.header.title}</span>
            <span className="message__container-subtitle">{meta.header.subtitle}</span>
          </div>
          <div className="message__container-messages">
            <ul>
              {this.renderInitialMessage()}
              {this.renderMessages()}
            </ul>
            <div className="message__container-input">
              <textarea
                onInput={this.handleInputFieldChange}
                onKeydown={this.handleInputKeydown}
                value={this.state.inputValue}
                className="message__container-inputfield"
                type="text"
                placeholder="Type your message"
                resize="false"
              />
            </div>
          </div>
        </div>
        <button style={highlighted} onClick={this.toggleMessageContainer} className="message__container-toggle">
          <div className={classes.toggleIcon}/>
        </button>
      </div>
    );
  }

  render() {
    if (!this.state.isVisible) return null;
    return this.renderApp();
  }
}

export default App;
