
import './App.css';

import Hamburger from './Hamburger';
function App() {
  return (
    <div className="App">
      <Hamburger pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      <div id="page-wrap">Redmarmoset</div>
    </div>
  );
}

export default App;
