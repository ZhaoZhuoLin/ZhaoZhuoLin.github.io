import React, { Component } from 'react'

export default class Footer extends Component {


  claerTodo = () => {
    this.props.cleatAllProcessTodo();
  }
  handleCheckeAllTodo = (event) => {
    this.props.checkedAllTodo(event.target.checked);
  }

  render() {
    let { todo } = this.props;
    let doCount = todo.reduce((pre, cur) => pre + (cur.process ? 1 : 0), 0)
    let total = todo.length
    return (
      <div>
        <input type="checkbox" onChange={this.handleCheckeAllTodo} checked={doCount === todo.length &&todo.length!=0 ? true : false} />
        已完成<span>{doCount}</span>
        /
        全部<span>{total}</span>
        <button onClick={this.claerTodo}>清除已完成任务</button>
      </div>
    )
  }
}
