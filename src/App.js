
import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import Feed from './components/Feed';
function App() {
  return (
    <div>
      <div className="App">
        <Profile/>
        <Login/>
      </div>
      <div className='App-2'>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
