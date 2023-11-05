
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {HashRouter,Routes,Route} from 'react-router-dom';
import Homepage from './components/HomePage';
import Nav from './components/Nav';


function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
