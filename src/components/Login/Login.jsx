import React , {useState , useEffect} from "react";
import * as loginComponent from './loginComponent';
import '../../css/login.css';
import axios from "axios";
import { ToastContainer , toast } from "react-toastify";
import { useNavigate , Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {loginRoute} from '../../utils/APIRoutes';


function Login() {
    const [univ, toggle] = useState(true);
    const navigate = useNavigate();
    const [values , setValues] = useState({emailU: "" , passwordU: "" , emailS: "" , passwordS: ""});
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    useEffect(() => {
        if (localStorage.getItem("key")) {
          navigate("/");
        }
      }, []);

      const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };

// THIS IS A FUNCTION FOR HANDLE VALIDATION
const validateForm = () => {
    const { emailU, passwordU , emailS , passwordS } = values;
    if(univ){
        if (emailU === "") {
          toast.error("Email and Password is required.", toastOptions);
          return false;
        } else if (passwordU === "") {
          toast.error("Email and Password is required.", toastOptions);
          return false;
        }
    }else{
        if (emailS === "") {
          toast.error("Email and Password is required.", toastOptions);
          return false;
        } else if (passwordS === "") {
          toast.error("Email and Password is required.", toastOptions);
          return false;
        }
        
    }

    return true;
  };
// THIS IS A FUNCTION FOR HANDLE SUBMIT
const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
        const { emailU, passwordU , emailS , passwordS } = values;
        var email="" , password="";
        if(univ){
            email = emailU;
            password = passwordU;
        }else{
            email = emailS;
            password = passwordS;
        }
      const { data } = await axios.post(loginRoute, {
        email,
        password,
        univ
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          "loginCredentials",
          JSON.stringify(data.user)
        );
        navigate("/");
      }
    }
  };

        return(
            <div className="loginpage">
            <loginComponent.Container>
                <loginComponent.SignUpContainer signinIn={univ}>
                    <loginComponent.Form onSubmit={(e) => handleSubmit(e)}>
                        <loginComponent.Title>Student Sign In</loginComponent.Title>
                        <loginComponent.Input onChange={(e) => {handleChange(e)}} name="emailS" type='email' placeholder='Email' />
                        <loginComponent.Input onChange={(e) => {handleChange(e)}} name="passwordS" type='password' placeholder='Password' />
                        <loginComponent.Anchor href='#'>Forgot your password?</loginComponent.Anchor>
                        <loginComponent.Button>Sign In</loginComponent.Button>
                    </loginComponent.Form>
                </loginComponent.SignUpContainer>
            
                <loginComponent.SignInContainer signinIn={univ}>
                    <loginComponent.Form onSubmit={(e) => handleSubmit(e)}>
                        <loginComponent.Title>University Sign In</loginComponent.Title>
                        <loginComponent.Input onChange={(e) => {handleChange(e)}} name="emailU" type='email' placeholder='Email' />
                        <loginComponent.Input onChange={(e) => {handleChange(e)}} name="passwordU" type='password' placeholder='Password' />
                        <loginComponent.Anchor href='#'>Forgot your password?</loginComponent.Anchor>
                        <loginComponent.Button>Sign In</loginComponent.Button>
                    </loginComponent.Form>
                </loginComponent.SignInContainer>
        
                <loginComponent.OverlayContainer signinIn={univ}>
                    <loginComponent.Overlay signinIn={univ}>
        
                    <loginComponent.LeftOverlayPanel signinIn={univ}>
                        <loginComponent.Title>ProjectiON!</loginComponent.Title>
                        <loginComponent.Paragraph>
                            Click here for University Sign in
                        </loginComponent.Paragraph>
                        <loginComponent.GhostButton onClick={() => toggle(true)}>
                                University
                            </loginComponent.GhostButton>
                            </loginComponent.LeftOverlayPanel>
            
                            <loginComponent.RightOverlayPanel signinIn={univ}>
                            <loginComponent.Title>ProjectiON!</loginComponent.Title>
                        <loginComponent.Paragraph>
                            Click here for Student Sign in
                        </loginComponent.Paragraph>
                            <loginComponent.GhostButton onClick={() => toggle(false)}>
                                Student
                            </loginComponent.GhostButton> 
                      </loginComponent.RightOverlayPanel>
  
                  </loginComponent.Overlay>
              </loginComponent.OverlayContainer>

          </loginComponent.Container>
          <ToastContainer/>
            </div>
      )
}

export default Login;