import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Form, FormGroup, Col, Button} from "reactstrap";


import FormElement from "../../components/UI/Form/FormElement";
import {sendTask} from "../../store/actions/tasksActions";



class TaskSend extends Component {
    state = {
        username: '',
        text: '',
        email: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submitFormHandler = event => {
        event.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });
        this.props.sendTask(formData);
    };

    render() {
        return (
            <Fragment>
                <Form onSubmit={this.submitFormHandler}>
                    <h2>Добавить новую задачу</h2>
                    <FormElement
                        propertyName="username"
                        title="Имя"
                        type="text"
                        value={this.state.username}
                        onChange={this.inputChangeHandler}
                        placeholder="Введите имя"
                    />
                    <FormElement
                        propertyName="email"
                        title="Email"
                        type="email"
                        value={this.state.email}
                        onChange={this.inputChangeHandler}
                        placeholder="Введите электронную почту"
                    />
                    <FormElement
                        propertyName="text"
                        title="Задача"
                        type="textarea"
                        value={this.state.text}
                        onChange={this.inputChangeHandler}
                        placeholder="Введите текст задачи"
                    />
                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}} />
                        <Button className="ml-3" type="submit" color="primary">Создать</Button>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.tasks.error,
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    sendTask: data => dispatch(sendTask(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskSend);