import Demo from '@components/Demo';
import Home from '@components/Home';
import Loading from '@components/Lib/Loading';
import React, { Suspense } from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';

interface YDProps extends RouteProps {
  auth?: string;
}

// render?: (props: RouteComponentProps<any>) => React.ReactNode;
// children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
const routesArr: YDProps[] = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: Demo,
    path: '/demos/:id',
    exact: true,
  },
];

const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routesArr.map((r, index) => {
        console.log('[ 🍊 ]', index);
        const { component, path, exact } = r;
        const LazyCom = component!;
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            render={(props) => <LazyCom {...props} />}
          />
        );
      })}
    </Switch>
  </Suspense>
);

export default Routes;
