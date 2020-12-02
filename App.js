import React from 'react';
import './App.css';
import { Component } from 'react';
export default class App extends React.Component {
   constructor(props){
      super(props)
      this.state ={
        num:1
      }
   }
   handlerClick() {
    console.log("点击按钮")
    //修改state状态数据的格式
    this.setState({
        num:this.state.num+1
    })
  }
  render() {
      return (
          <div>
              <h1>{this.state.num}</h1>
              <button onClick={this.handlerClick.bind(this)}>点击 </button>
          </div>
      )
}

