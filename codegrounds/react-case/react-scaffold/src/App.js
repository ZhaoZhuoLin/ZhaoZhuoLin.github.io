import React from "react"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
export default class App extends React.Component {
  state = {
    todo: [
      {
        id: "001",
        name: "吃饭",
        process: true
      },
      {
        id: "002",
        name: "睡觉",
        process: false
      }, {
        id: "003",
        name: "打篮球",
        process: false
      }
    ]
  }
  getInputVal = (newTodo) => {
    console.log(newTodo)
    let { todo } = this.state;
    let newTodoList = [newTodo, ...todo]
    this.setState({ todo: newTodoList })
  }

  // 勾选全部
  checkedAllTodo = (todoStatus) => {
    console.log(todoStatus)
    let { todo } = this.state
    let newTodo = todo.map(i => { return { ...i, process: todoStatus } })
    console.log(newTodo);
    this.setState({
      todo: newTodo
    })
  }

  // 清除全部todo
  cleatAllProcessTodo = () => {
    let { todo } = this.state;
    let newTodo = todo.filter((i) => {
      return !i.process
    })
    this.setState({ todo: newTodo })
  }

  // 更新勾选todo
  updateTodo = (item, process) => {
    // 匹配数据
    let newTodo = this.state.todo.map((i) => {
      if (i.id == item.id) return { ...i, process }
      else return i
    })
    this.setState({ todo: newTodo })
  }

  // 删除指定id的todo
  deleteTodo = (id) => {
    let newTodo = this.state.todo.filter((i) => {
      return i.id !== id
    })
    this.setState({ todo: newTodo })
  }

  render() {
    let { todo } = this.state
    return (
      <div>
        {/* 父给子通过props传递 */}
        <Header getInputVal={this.getInputVal} />
        <List todo={todo} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
        <Footer todo={todo} checkedAllTodo={this.checkedAllTodo} cleatAllProcessTodo={this.cleatAllProcessTodo} />
      </div>
    )
  }
}