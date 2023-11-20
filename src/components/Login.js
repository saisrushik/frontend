import 'bootstrap/dist/css/bootstrap.min.css';
import loginImg from "../images/homepage-img.png";
import Navbar from './Navbar';
import { Link,useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';


function Login(){
    /*
    const styles=`
.divider:after,.divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
}
.h-custom {
    height: calc(100% - 73px);
}
@media (max-width: 450px) {
    .h-custom {
      height: 100%;
    }
}
`
*/
const [email,setEmail] = useState();
const [pass,setPass] = useState();
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:4000/studentRoute/login',{email,pass})
    .then(result =>{
        console.log(result)
        if(result.status === 200){
            navigate('/courses')
        }
    })
    .catch(err => console.log(err))
}

    return(
        <div>
            <Navbar />
            <div className="container-fluid h-custom" >
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={loginImg} className="img-fluid" alt="" />
                    </div>   
                    <div className="col-md-8 col-lg-6 col-xl-6 offset-xl-1"  >
                        <form onSubmit={handleSubmit} className="shadow" style={{margin: "10%", padding:"5%"}}>
                            <div className="form-outline mb-4" >
                                <label className="form-label" for="form3Example3">Email address</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                            </div>
                            <div className="form-outline mb-3">
                                <label className="form-label" for="form3Example4">Password</label>
                                <input onChange={(e) => setPass(e.target.value)} type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" for="form2Example3">Remember me</label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button className="btn btn-primary btn-lg" style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}} >Login</button>
                                
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
                                    <Link to='/register' className="link-danger">
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;