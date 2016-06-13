
// import * as React from 'react';
// import { render } from 'react-dom'

// // import { stack as Menu } from 'react-burger-menu';
// import { Router, Route, hashHistory, IndexRoute } from 'react-router';


// import App from './modules/App';
// import Home from './modules/Home';
// import About from './modules/About';
// import Repos from './modules/Repos';
// import Repo from './modules/Repo';

// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Home}/>
//       <Route path="/repos" component={Repos}/>
//       <Route path="/repos/:userName/:repoName" component={Repo}/>
//       <Route path="/about" component={About}/>
//     </Route>
//   </Router>
// ), document.getElementById('app'))

import * as React from 'react';
import { render } from 'react-dom'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';


import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import App from './App';

render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('app')
);