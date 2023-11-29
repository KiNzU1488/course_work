import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import First from './components/first';
import Sizm from './components/sizm';
import Slava from './components/slava';
import News from './components/news';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/' element={<First />} />
        <Route path='/sizm' element={<Sizm />} />
        <Route path='/slavaUa' element={<Slava />} />
        <Route path='/news' element={<News />} />
      </Route>
    </Routes>
  );
}

export default Router;
