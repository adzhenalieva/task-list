import React, {Component, Fragment} from 'react';
import {Button, Col, Form, FormGroup} from "reactstrap";
import {connect} from "react-redux";

import {loginUser} from "../../store/actions/usersActions";
import FormElement from "../../components/UI/Form/FormElement";

class Login extends Component {
    state = {
        username: '',
        password: '',
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
        this.props.loginUser(formData)
    };

    render() {
        return (
            <Fragment>
                <h2 className="mb-4">Login</h2>
                <Form onSubmit={this.submitFormHandler}>
                    <FormElement
                        propertyName="username"
                        title="Username"
                        type="text"
                        value={this.state.username}
                        onChange={this.inputChangeHandler}
                        placeholder="Enter username you registered with"
                        autoComplete="current-username"
                    />
                    <FormElement
                        propertyName="password"
                        title="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.inputChangeHandler}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                    />
                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}}/>
                        <Button className="ml-3"  type="submit" color="primary">Login</Button>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.users.loginError
});

const mapDispatchToProps = dispatch => ({
    loginUser: userData => dispatch(loginUser(userData))
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);