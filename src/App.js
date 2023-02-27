import './App.css';
import Login from './components/login';
import Register from './components/register';
import Search from './components/search';
function App() {
  return (
    <div>
      <div className="flexbox-container">
        <Login/>
        <Register/>
        <Search/>
      </div>
    </div>
  );
}

export default App;
