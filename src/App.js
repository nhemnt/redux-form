import React, { Component } from 'react';
import ReduxForm from './component/ReduxForm'
import { Provider } from 'react-redux'
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div>
          <ReduxForm />
        </div>
      </Provider>
    );
  }
}

export default App;
