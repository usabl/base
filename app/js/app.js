import React, { PureComponent } from 'react';
import SimpleStorage from 'Embark/contracts/SimpleStorage';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    SimpleStorage.methods.set(100).send();
    SimpleStorage.methods
      .get()
      .call()
      .then(function(value) {
        console.log(value);
      });
    SimpleStorage.methods
      .storedData()
      .call()
      .then(function(value) {
        console.log(value);
      });
  }

  render() {
    return (
      <div>
        <p>
          If you see the value one hundred below this line then everything is
          working:
        </p>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default App;
