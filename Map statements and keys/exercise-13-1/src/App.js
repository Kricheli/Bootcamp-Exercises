import React, {Component} from 'react';
import ReactDom from 'react-dom/client';
import MessageData from './Components/MessageData';


class App extends React.Component {
  render() {
    return (
      <div>
        <MessageData/>
      </div>
    );
  }
}

export default App;