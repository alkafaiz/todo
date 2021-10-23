import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
                        return Component && <Component />;
                    }}
                />
            ))}
        </Switch>
    );
};

export default AppRoutes;
