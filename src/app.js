import React, { Component } from 'react';

import ToDoList from './components/ToDoList';
import styles from './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2 className={styles.title}>Arya's List</h2>
        <ToDoList />
      </div>
    );
  }
}

export default App;
