import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Layout from '../layout';
import Home from '../views/home';
import Doc from '../views/doc';
import Login from '@/views/login';
export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/"
              render={() => (
                <Layout>
                  <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/doc" component={Doc} />
                  </Switch>
                </Layout>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
