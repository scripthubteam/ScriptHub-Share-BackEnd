import React from 'react';
// import Cabecera from './Cabecera';
import Paper from '@material-ui/core/Paper';
// import { Redirect, Route, Switch } from 'react-router-dom';
import { Redirect, Switch } from 'react-router-dom';
// import routes from '../../routes';
// import Footer from './Footer';
import CssBaseline from '@material-ui/core/CssBaseline';

function Layout() {
    // const tema = theming.defaultTheme;

    return (
            <React.Fragment>
                <CssBaseline />
                <Paper elevation={4}>
                    {/* <Cabecera /> */}
                </Paper>
                <Switch>
                    {/* {routes.map((route) => {
                        return route.component ? (
                            <Route
                                key={route.id}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <route.component key={route.id} {...props} />
                                )} />
                        ) : (null);
                    })} */}
                    <Redirect to="/login" />
                </Switch>
                {/* <Footer /> */}
            </React.Fragment>
    );
}
export default Layout;