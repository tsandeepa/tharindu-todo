import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Todos from './pages/todos';
import GlobalStyles from './styles/Global.styled';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Todos/>} />
        
      </Routes>
    </div>
  );
}

export default App;
