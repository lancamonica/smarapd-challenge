// external
import React from "react";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
// internal
import Auth from "features/auth/containers/Auth";
import Users from "features/users/containers/Users";
import Repositories from "features/repositories/containers/Repositories";

const Root = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Auth}/>
                <Route exact path="/users" component={Users}/>
                <Route exact path="/repositories/:user" component={Repositories}/>
            </Switch>
        </HashRouter>
    )

}

export default Root;
