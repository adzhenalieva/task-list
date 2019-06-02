import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Form, FormGroup, Col, Button} from "reactstrap";


import FormElement from "../../components/UI/Form/FormElement";
import {editTask} from "../../store/actions/adminActions";


class TaskEdit extends Component {
    state = {
        status: '',
        text: '',
        token: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submitFormHandler = async event => {
        event.preventDefault();
        await this.setState({token: this.props.user.message.token});

        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });
        let id = this.props.match.params.id;
        this.props.editTask(formData, id);
    };

    render() {
        return (
            <Fragment>
                <Form onSubmit={this.submitFormHandler}>
                    <h2>Add new artist</h2>
                    <FormElement
                        propertyName="text"
                        title="text"
                        type="text"
                        value={this.state.text}
                        onChange={this.inputChangeHandler}
                        placeholder="Enter text"
                    />
                    <FormElement
                        propertyName="status"
                        title="status"
                        type="number"
                        value={this.state.status}
                        onChange={this.inputChangeHandler}
                        placeholder="Enter status"
                    />
                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}}/>
                        <Button className="ml-3" type="submit" color="primary">Create</Button>
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
    editTask: (data, id) => dispatch(editTask(data, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskEdit);