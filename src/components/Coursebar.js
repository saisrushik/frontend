
import { Link } from "react-router-dom";

function Coursebar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto medium-500">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/lecture">Lecture</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/practice">Practice</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/quiz">Quiz</Link>
                            </li>
                        </ul>    
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Coursebar;