import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListMenu from './pages/ListMenu';

function App() {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<ListMenu />} path='/list-menu' />
    </Routes>
  );
}

export default App;
