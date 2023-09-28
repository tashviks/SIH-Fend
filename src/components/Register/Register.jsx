import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../../utils/APIRoutes";
import Canvas from "../Canvas/canvas";
import {AnimatedPage} from "../../components/Misc/AnimatedPage";
import avatar from "../../assets/avatar.png";



export default function Register() {
    const navigate = useNavigate();
    const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };

    const [values, setValues] = useState({
      profile: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAXVBMVEX///8AAADp6ekhISH5+fl0dHRqamrj4+NwcHCbm5v09PT8/PxLS0tSUlIUFBTZ2dk5OTmpqalYWFgmJiajo6NiYmKTk5MJCQkuLi6AgIDLy8vBwcFERES5ubnR0dH5DsEtAAABwklEQVRoge2ZiZKCMAxAG045rCB4gfL/n6nOrutBw2onCbOzeT/wpjRJk2CMoiiKoiiKoiiKovwRgiCYxZvW66oJm2pdp9Lm2MING4vaW3imlVMv4JV4PjXAQkadOdQAmYR65VQDrATcG8S94Vdjx5Y4+BZ1b9ndFequuNW5Rd02Z3anO9S94y6teKjxB9uc7jnv2+xR955bbQ6o+8Du7lB3x+42JaIu+dWmR9y9gNvETrVM5xIdHepjIeI2+fg9qdhz+0aUvKiTSEp94fR49OokaL4Q9bezJ73QVT+RDt0gPRAp/5P8MvuL1ZQfii5Lmu8ca5KsE8uye2o/FLZeorLlmbtr2mfcn79oJ/q1lvXTp1jT8kXJ2CXXk+YrNZfa3bA8w7P7iJZvqAGWDAFfTF/1nZI+4sY5jZFQq/F1wxjiBQTWlLshbdUDfPp0YSnXy65N4hSEmYbPfxh0c+F7mf3Ikko9fKwGGIjcn972FaIbjzzUADSl9eTlppmT3nm+xpDM40Xo5Q4pnpTASw1AUds+K+V3KIq6+/fI71D8QMGXedNQrPr8wpwm0GMb+mAp3IEn8lOioiiKoiiKoiiKokxxBuKKEayBjIEyAAAAAElFTkSuQmCC",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

// THIS IS A FUNCTION FOR HANDLE VALIDATION
    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
        if (password !== confirmPassword) {
          toast.error(
            "Password and confirm password should be same.",
            toastOptions
          );
          return false;
        } else if (username.length < 3) {
          toast.error(
            "Username should be greater than 3 characters.",
            toastOptions
          );
          return false;
        } else if (password.length < 8) {
          toast.error(
            "Password should be equal or greater than 8 characters.",
            toastOptions
          );
          return false;
        } else if (email === "") {
          toast.error("Email is required.", toastOptions);
          return false;
        }
        return true;
      };
// THIS IS A FUNCTION FOR HANDLE SUBMIT
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
          const { profile, email, username, password } = values;
          const { data } = await axios.post(registerRoute, {
            profile,
            username,
            email,
            password,
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

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };

    const handleFileUpload = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      setValues({...values, profile: base64})
      console.log(base64);
    }

    function convertToBase64(file) {
      return new Promise((resolve, reject)=> {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = ()=>{
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      })
    }
  
    return (
        <>
        
       
          <FormContainer>
          <AnimatedPage>
            <form action="" onSubmit={(event) => handleSubmit(event)}>
              <div className="brand">
                <h1>APPLICATION</h1>
                <h1>REGISTER</h1>

              </div>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={(e) => handleChange(e)}
              />
              
              <button type="submit">Create User</button>
            </form>
            </AnimatedPage>
          </FormContainer>
         
          <ToastContainer />
          
        </>
      );
    }

    document.body.style.margin = "0px 0px 0px 0px";
    const FormContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #FFF;
    .brand {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      img {
        height: 5rem;
      }
      h1 {
        color: white;
        text-transform: uppercase;
      }
    }
  
    form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      background-color: #b993ed;
      border-radius: 2rem;
      padding: 3rem 5rem;
      box-shadow : 10px 5px 5px grey;

    }
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    color : black;
    background-color: white;
    .brand {
      padding-left : 2px;
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      img {
        height: 5rem;
      }
      h1 {
        text-transform: uppercase;
        color : #4e0eff
      }
    }
  
    form {
      display: flex;
      justify-content : center;
      align-items : center;
      flex-direction: column;
      background: linear-gradient(135deg, #71b7e6, #9b59b6);
      gap: 2rem;
      border-radius: 2rem;
      padding: 3rem 5rem;
      color : black;
      border : 1px solid black;
    }
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
    button {
      background-color: #4e0eff;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      &:hover {
        background-color: #4e0eff;
      }
    }
    span {

      color: white;
      text-transform: uppercase;
      a {

      text-transform: uppercase;
      a{
        color: #4e0eff;
        text-decoration: none;
        font-weight: bold;
      }
    }

    ::placeholder{
      color:white;
    }


  `;
  
