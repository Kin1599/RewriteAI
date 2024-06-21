import { useState } from 'react';
import Header from '../modules/Header/Header';
import CreatePage from '../pages/CreatePage/CreatePage'
import './App.css';

function App() {
  const [createText] = useState('');
  
  return (
    <div className="App">
      <Header/>
      <CreatePage createText={createText}/>
    </div>
  );
}

export default App;
