import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;