import React from 'react';
import Completable from './Completable';

import styles from '../styles.scss';

class ToDo extends Completable {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li
        className={styles.toDo}
        data-index={this.props.index}
        onDragOver={() => this.props.handleDragOver(this.props.index)}
      >
        <input type="checkbox" checked={false} onChange={this.completeToDo} />
        <div
          className={styles.toDoContent}
          draggable
          onDragStart={(e) => this.props.handleDragStart(e, this.props.index)}
          onDragEnd={(e) => this.props.handleDragEnd(e)}
        >
          {this.props.value}
        </div>
      </li>
    );
  }
}

export default ToDo;
