import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';

import './styles/fonts.scss';
import './styles/grid.scss';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default App;
