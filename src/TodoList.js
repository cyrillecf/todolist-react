import React, { Component } from 'react';

class TodoList extends Component{

  constructor(props){
    super(props);
    this.state = {
      userInput:"",
      list:[]
    }
    this.addTodo = this.addTodo.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.setState({
      userInput: e.target.value
    })
  }

  addTodo(e){
    e.preventDefault();

    if(this.state.userInput !== ''){
      this.setState({
        userInput: '',
        list: [...this.state.list, this.state.userInput]
      });
    }
  }

  removeTodo(index){
    const arrayList = [...this.state.list];
    arrayList.splice(index,1);

    this.setState({
      list: arrayList,
    });
  }
  
  RenderList(){
    return this.state.list.map((item, i)=> {
      return(
        <li key={i}>
          {item} | <button
          className="remove-btn"
          onClick={this.removeTodo.bind(this, i)}  
          >X</button>
        </li>
      )
    });
  }

  render(){
    return(
      <div>
        <h1>TodoList's {this.props.name} </h1> 
        <form>
          <input 
          value = {this.state.userInput}
          type="text" 
          name="todo" 
          id="todo"
          placeholder="Add item" 
          onChange={this.onChange}/>

          <button 
          className="add-btn" 
          onClick={this.addTodo} 
          >add</button>
        </form>
        <ul>{this.RenderList()}</ul>
      </div>
      
    );
  }
}

export default TodoList;