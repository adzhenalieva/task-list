import React, {Component} from 'react';
import './Task.css';

class Task extends Component {

    render() {
        return (
            <div className="Task">
                <p> <span className="Bold">Автор: </span>{this.props.author}</p>
                <p> <span className="Bold">Почта: </span>{this.props.email}</p>
                <p className="Text"> <span className="Bold">Задача: </span>{this.props.text}</p>
                <p> <span className="Bold">Status: </span>{this.props.status}</p>
                {this.props.children}
            </div>
        );
    }
}

export default Task;