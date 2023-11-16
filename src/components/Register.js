import 'bootstrap/dist/css/bootstrap.min.css';
import '../register.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


function Register(){
    return (
        <div>
            <Navbar />

            <div className="main">
                <div className="wrapper card col-md-8 col-lg-6 col-xl-6">
                    <h2>Registration</h2>
                    <form action="#">
                    <div className="input-box">
                        <input type="text" placeholder="Enter your name" required />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Enter your email" required />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Enter your ID" required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Create password" required />
                    </div>
                    <div className="policy mx-4">
                        <input className="form-check-input" type="checkbox" value="" id="policy" />
                        <label className="form-check-label" for="policy">Remember me</label>
                    </div>
                    <div className="input-box button">
                        <input type="Submit" value="Register Now" />
                    </div>
                    <div className="text">
                        <h3>Already have an account? <Link to='/login' >Login now</Link></h3>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;