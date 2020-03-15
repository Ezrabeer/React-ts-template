import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface RouteWithLayoutProps extends RouteProps {
  path: string | string[]
  view: React.FC<object>,
  layout: React.FC,
}

const RouteWithLayout: React.FC<RouteWithLayoutProps> = (props) => {
  const { layout: Layout, view: View, ...rest } = props;
  return (
    <Route
      { ...rest }
      render={ matchProps => (
        <Layout>
          <View { ...matchProps }/>
        </Layout>
      ) }
    />
  );
};

export default RouteWithLayout;