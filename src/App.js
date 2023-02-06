import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <div className="Flex-Box">
        <Signup />
        <Login />
    </div>
  );
}

export default App;
