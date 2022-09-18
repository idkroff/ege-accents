import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Component, Suspense, lazy } from 'react';

import Loader from './components/Loader';
import { LoaderContext } from './service/LoaderContext';

const Trainer = lazy(() => import('./components/Trainer'));
const Stats = lazy(() => import('./components/Stats'));
const History = lazy(() => import('./components/History'));
const About = lazy(() => import('./components/About'));

class App extends Component {
  static contextType = LoaderContext;

  componentDidMount() {
    setTimeout(() => {
      document.body.classList.add('themeBackground');
    }, 0)
  }

  render() {
    return (
        <Router>
          <Loader hidden={this.context.loaderHidden} />
          <Suspense fallback={<Loader fullpage />}>
            <Routes>
              <Route path='/' element={<Trainer userState={this.state} userSetState={(...data) => this.setState(...data)} />} />
              <Route path='/about' element={<About />} />
              <Route path='/stats' element={<Stats userState={this.state} userSetState={(...data) => this.setState(...data)} />} />
              <Route path='/stats/history' element={<History userState={this.state} userSetState={(...data) => this.setState(...data)} />} />
            </Routes>
          </Suspense>
        </Router>
    );
  }
}
export default App;