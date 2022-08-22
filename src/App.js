
import './App.css';
import Header from './componets/header';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route}  from 'react-router-dom'
import Card from './componets/card'
import CardDetails from './componets/cardDetails'


function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Routes>
        <Route path='/' element={<Card/>}></Route>
        <Route path='/cart' element={<CardDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
