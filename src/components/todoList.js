import React, { Component } from 'react';
import ToDo from './ToDo';

import styles from '../styles.scss';

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDos: [
        'Cersei Lannister',
        'Joffrey Baratheon',
        'Ser Ilyn Payne',
        'The Mountain',
        'The Hound',
        'Melisandre',
        'Beric Dondarrion',
        'Thoros of Myr',
        'Tywin Lannister',
        'Ser Meryn Trant',
        'Walder Frey',
      ],
      newToDo: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      newToDo: event.target.value,
    });
  };

  addToDo = () => {
    if (!this.state.newDoTo) {
      return;
    }
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

  handleDragStart = (e, index) => {
    this.draggedToDo = this.state.toDos[index];

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  handleDragEnd = () => {
    this.draggedToDo = null;
  };

  handleDragOver = (index) => {
    const draggedOverItem = this.state.toDos[index];

    if (this.draggedToDo === draggedOverItem) {
      return;
    }

    const toDos = this.state.toDos.filter((item) => {
      return item !== this.draggedToDo;
    });

    toDos.splice(index, 0, this.draggedToDo);

    this.setState({ toDos });
  };

  render() {
    const { toDos, newToDo } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.controls}>
          <input type="text" value={newToDo} onChange={this.handleChange} />
          <button id="btn-add-new" onClick={this.addToDo}>
            Add
          </button>
        </div>
        <ul className={styles.list}>
          {toDos.map((toDo, index) => (
            <ToDo
              value={toDo}
              index={index}
              handleDragStart={this.handleDragStart}
              handleDragEnd={this.handleDragEnd}
              handleDragOver={this.handleDragOver}
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
