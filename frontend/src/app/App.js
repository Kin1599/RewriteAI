import { useState } from 'react';
import Header from '../modules/Header/Header';
import CreatePage from '../pages/CreatePage/CreatePage'
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from '../modules/Footer/Footer';
import RewritePage from '../pages/RewritePage/RewritePage'
import MyTextPage from '../pages/MyTextPage/MyTextPage';

function App() {
  const [createText] = useState('');
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='*' element={<Navigate to="/" replace/>}/>
        <Route path='/' element={<CreatePage createText={createText}/>}/>
        <Route path='/rewrite' element={<RewritePage/>}/>
        <Route path='/texts' element={<MyTextPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
