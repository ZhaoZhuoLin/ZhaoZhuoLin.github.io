import React, { Component } from 'react'
import PropType from "prop-types";

export default class List extends Component {


    //对接收的props进行类型，必要性的限制
    static propTypes = {
        updateTodo: PropType.func.isRequired,
        deleteTodo: PropType.func.isRequired,
    }

    state = {
        mouse: false
    }

    // 勾选todo
    handelCheck = (item) => {
        return (event) => {
            this.props.updateTodo(item, event.target.checked)
        }
    }
    // 删除todo
    handleClick = (id) => {
        return () => {
            if (window.confirm("确定删除吗?")) {
                this.props.deleteTodo(id);
            }
        }
    }

    render() {
        let { todo } = this.props
        return (
            <div>
                <ul>
                    {
                        todo.map((item, index) => {
                            return <li key={item.id} >
                                <input type="checkbox" checked={item.process} onChange={this.handelCheck(item)} />
                                {item.name}
                                <button onClick={this.handleClick(item.id)}>删除</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
