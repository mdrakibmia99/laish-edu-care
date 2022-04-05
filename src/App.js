import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Analytics from './components/Analytics/Analytics';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Question from './components/Question/Question';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path="/home" element={<Home></Home>}> </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/analytics' element={<Analytics></Analytics>}> </Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/question' element={<Question></Question>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
       
      </Routes>
    
    </div>
  );
}

export default App;
