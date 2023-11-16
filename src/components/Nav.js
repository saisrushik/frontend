import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
//import Courses from "./Courses";


function Nav(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand font-weight-bold" to="/">LinguaMaster</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto medium-500">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/courses">Courses</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://youtube.com">Blog</a>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                          <button className="btn btn-info p-1">LOGIN/SIGN UP</button>
                    </Link>
                  </li>
              </ul>    
            </div>
        </div>
    </nav>
    )
}

export default Nav;