import React from 'react';
import Completable from './Completable';

import styles from '../styles.scss';

class ToDo extends Completable {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={styles.toDo}>
        <input type="checkbox" onChange={this.completeToDo} />
        <li className={styles.toDoContent}>{this.props.value}</li>
      </li>
    );
  }
}

export default ToDo;
