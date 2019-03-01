import React     from 'react';
import ReactDOM  from 'react-dom';

import HomePage from './views/HomePage';
import SettingsPage from './views/SettingsPage';
import ErrorPage from './views/ErrorPage';

import "./style/bundle.css";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
         <Switch>
            <Route strict exact path="/" component={HomePage} />
            <Route component={ErrorPage} />
         </Switch>
      </BrowserRouter>
   );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
