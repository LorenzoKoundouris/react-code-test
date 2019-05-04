import React, { Component } from 'react';
import ToDo from './ToDo';

import styles from '../styles.scss';

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDos: ['Finish this test'],
      newToDo: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      newToDo: event.target.value,
    });
  };

  addToDo = () => {
    this.setState({
      toDos: [...this.state.toDos, this.state.newToDo],
      newToDo: '',
    });
  };

  completeToDo = (index) => {
    const toDoList = this.state.toDos;
    this.setState({
      toDos: toDoList
        .slice(0, index)
        .concat(toDoList.slice(index + 1, toDoList.length)),
    });
  };

  render() {
    const { toDos, newToDo } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.controls}>
          <input type="text" value={newToDo} onChange={this.handleChange} />
          <button onClick={this.addToDo}>Add</button>
        </div>
        <ul className={styles.list}>
          {toDos.map((toDo, index) => (
            <ToDo
              value={toDo}
              index={index}
              completeToDo={this.completeToDo}
              key={index}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
