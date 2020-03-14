// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            tasks: ""
        }
    }

    handleInputChange = e => {
        this.setState({tasks: e.target.value})
    }

    handleClick = e => {
        e.preventDefault()
    }
    
    render(){
    return(
        <div>
            <h2>List of Todos</h2>
            <label>Todo</label>
            <input
            type="text"
            name="task"
            placeholder="task"
            onChange={this.handleInputChange}
            />
            <button onClick={this.handleClick}>Submit</button>
            <ul>
                <li>
                    {this.state.tasks}
                </li>
            </ul>
          
        </div>
    )
    }
}
export default TodoList;

