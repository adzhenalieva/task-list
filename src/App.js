import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {NotificationContainer} from "react-notifications";
import Container from "reactstrap/es/Container";
import { Route, Switch} from "react-router-dom";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import MainPage from "./containers/MainPage/MainPage";
import TaskSend from "./containers/TaskSend/TaskSend";
import Login from "./containers/Login/Login";
import TaskEdit from "./containers/TaskEdit/TaskEdit";




class App extends Component {
    render() {
        return (
            <div>
                <NotificationContainer/>
                <header>
                    <Toolbar user={this.props.user}/>
                </header>
                <Container className="mt-5">
                    <Switch>
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/new" exact component={TaskSend}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/edit/:id" exact component={TaskEdit}/>
                    </Switch>
                </Container>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    user: state.users.user
});


export default withRouter(connect(mapStateToProps)(App));



