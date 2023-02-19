import './App.css';
import Login from './components/login';
import Register from './components/register';
import Homepage from './components/homepage';
function App() {
  return (
    <div>
      <div className="flexbox-container">
        <Login/>
        <Register/>
        {/* <Homepage /> */}
      </div>
    </div>
  );
}

export default App;
