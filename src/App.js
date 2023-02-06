import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';
function App() {
  return (
    <div className="flexbox-container">
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
