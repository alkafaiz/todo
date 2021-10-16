import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';

const AppRoutes = () => {
    return (
        <Switch>
            {routes.map(({ component: Component, name, redirectTo, ...props }) => (
                <Route
                    {...props}
                    path={props.path}
                    key={name}
                    render={() => {
                        if (redirectTo) {
                            return <Redirect to={redirectTo} />;
                        }
                        return Component && <Component />;
                    }}
                />
            ))}
        </Switch>
    );
};

export default AppRoutes;
