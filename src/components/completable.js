import React, { Component } from 'react';

class Completable extends Component {
  constructor(props) {
    super(props);
  }

  completeToDo = () => {
    this.props.completeToDo(this.props.index);
  };
}

export default Completable;
