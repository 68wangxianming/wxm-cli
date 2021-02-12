import * as React from 'react';
import {Route, Switch, RouteProps, Redirect} from 'react-router-dom';
import Home from '@components/Home';
import Loading from '@components/Loading';
import NotFound from '@components/NotFound';

const {lazy, Suspense} = React;

interface YDProps extends RouteProps {
  auth?: boolean;
}

export const routes: YDProps[] = [
  {
    path: '/',
    exact: true,
    component: Home,
    auth: true,
  }
];

// 对状态属性进行监听
const Routes = (token: string) => (
  <Suspense fallback={<Loading/>}>
    <Switch>
      {routes.map((r, index) => {
        const {path, exact, component} = r;
        const LazyCom = component;
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            render={(props) => (!r.auth ? (
              <LazyCom {...props} />
            ) : token ? (
              <LazyCom {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: {from: props.location},
                }}
              />
            ))}
          />
        );
      })}
      <Route component={NotFound}/>
    </Switch>
  </Suspense>
);

export default Routes;
