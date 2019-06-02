import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchTasks} from "../../store/actions/tasksActions";
import {Button} from "reactstrap";
import Task from "../../components/Task/Task";
import {Link} from "react-router-dom";


class MainPage extends Component {


    componentDidMount() {
        this.props.fetchTasks();
    }

    editPage = id => {
        this.props.history.push('edit/' + id)
    };
    render() {

        let button = () => {
            //
        };
        if (this.props.user) {

            button = (id) => {
                return <Fragment>
                    <Button onClick={() => this.editPage(id)}>Редактировать</Button>
                </Fragment>
            };
        } else {
            button = () => {
                //
            };
        }
        return (
            <Fragment>
                <Link style={{fontSize: 36}} to="/new">Создать задачу</Link>
                <h3>Сортировать по </h3>
                <Button className="mx-2" onClick={() => this.props.fetchTasks({sort_field: "username"})}>По имени</Button>
                <Button  className="mx-2" onClick={() => this.props.fetchTasks( {sort_field: "email"})}>По почте</Button>
                <Button  className="mx-2" onClick={() => this.props.fetchTasks({sort_field: "status"})}>По статусу</Button>

                    {this.props.tasks.map(task => (
                        <Task
                            key={task.id}
                            author={task.username}
                            email={task.email}
                            text={task.text}
                            status={task.status !== 10 ? "Не выполнена" : 'Выполнена'}
                        >
                            {button(task.id)}
                        </Task>
                    ))}
                <Button  className="mx-2" onClick={() => this.props.fetchTasks({page: this.props.page === 1 ? 0 : this.props.page - 1})}>Назад</Button>
                <Button  className="mx-2" onClick={() => this.props.fetchTasks({page: this.props.page + 1})}>Вперед</Button>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks.tasks,
        page: state.tasks.page,
        user: state.users.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: (param) => dispatch(fetchTasks(param))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);