import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {HashRouter,Routes,Route} from 'react-router-dom';
import HomePage  from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import Courses from './components/Courses';
import Lecture from './components/Lecture';
import Practice from './components/Practice';
import Quiz from './components/Quiz';



function App() {  
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/courses' element={<Courses />}/>
          <Route path='/lecture' element={<Lecture />}/>
          <Route path='/practice' element={<Practice />}/>
          <Route path='/quiz' element={<Quiz />}/>
        </Routes>
      </HashRouter>
      
    </div>
  );
}



export default App;
