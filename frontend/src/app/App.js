import { useState } from 'react';
import Header from '../modules/Header/Header';
import CreatePage from '../pages/CreatePage/CreatePage'
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from '../modules/Footer/Footer';
import RewritePage from '../pages/RewritePage/RewritePage'
import MyTextPage from '../pages/MyTextPage/MyTextPage';
import ModalWindow from '../UI/ModalWindow/ModalWindow';

function App() {
  const [createText, setCreateText] = useState('');
  const [myTexts, setMyTexts] = useState([
    {title: "Текст про выращивание газона", text: "", date: "1 день назад"},
    {title: "Текст про выращивание газона", text: "", date: "1 день назад"},
    {title: "Текст про выращивание газона", text: "", date: "1 день назад"},
    {title: "Текст про выращивание газона", text: "", date: "1 день назад"},
  ]);
  const [isModal, setIsModal] = useState(false);

  const saveText = (text) => {
    setMyTexts(prevState => [...prevState, text]);
    setIsModal(false);
  }

  const closeModal = () => {
    setIsModal(false);
  }
  
  return (
    <div className="App">
      <ModalWindow closeModal={closeModal} saveText={saveText} isModal={isModal} text={createText}/>
      <Header/>
      <Routes>
        <Route path='*' element={<Navigate to="/" replace/>}/>
        <Route path='/' element={<CreatePage createText={createText} setMyTexts={setMyTexts} setIsModal={setIsModal} setCreateText={setCreateText}/>}/>
        <Route path='/rewrite' element={<RewritePage/>}/>
        <Route path='/texts' element={<MyTextPage texts={myTexts}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
