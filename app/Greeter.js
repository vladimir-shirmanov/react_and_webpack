import React, {Component} from 'react';
import config from './config.json';
import styles from './greeter.css';

class Greeter extends Component {
  constructor(props) {
    super(props);
    this.state = { some: 1 }
  }
  render() {
    debugger;
    return (
      <div className={styles.root}>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter;