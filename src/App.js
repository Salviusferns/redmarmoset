
import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import Hamburger from './Hamburger';
function App() {
  return (
    <div className="App">
      
      <Login/>
      <Profile/>
      <div id="page-wrap">Redmarmoset</div>
    </div>
  );
}

export default App;
