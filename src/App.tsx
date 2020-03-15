import React from 'react';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';

interface AppProps {
  history: History
}

const App: React.FC<AppProps> = ({ history}) => {
  return (
    <ConnectedRouter history={history}>

    </ConnectedRouter>
  )
};

export default App;
