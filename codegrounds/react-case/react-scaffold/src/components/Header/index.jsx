import React, { Component } from 'react'
import { nanoid } from "nanoid"
import PropType from "prop-types";
export default class Header extends Component {

  //对接收的props进行类型，必要性的限制
  static propTypes={
    getInputVal:PropType.func.isRequired
  }
  
  handleHeaderOnKeyUp = (event) => {
    let { code, target } = event
    if (code == "Enter") {

      if(target.value=="")return

      // 调用父组件的props定义的方法，进行传递值
      this.props.getInputVal({
        id: nanoid(),
        name: target.value,
        process: false
      })
      target.value = "";
    }
  }
  render() {
    return (
      <div>
        未作的事情:<input type="text" onKeyUp={this.handleHeaderOnKeyUp} />
      </div>
    )
  }
}
