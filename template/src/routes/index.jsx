import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App, UserListApp } from '../containers';

/* react router 2.x 必须配置 hashHistory */
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={App} />
        </Route>
        <Route path="/userList" component={UserListApp} />
    </Router>
);

export default routes;
