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
        <input type="checkbox" checked={false} onChange={this.completeToDo} />
        <div className={styles.toDoContent}>{this.props.value}</div>
      </li>
    );
  }
}

export default ToDo;
