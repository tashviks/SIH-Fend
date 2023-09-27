import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../../utils/APIRoutes";
import {AnimatedPage} from "../Misc/AnimatedPage";

export default function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({ email: "", password: "" });
    const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };
    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
          navigate("/");
        }
      }, []);

      const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };

// THIS IS A FUNCTION FOR HANDLE VALIDATION
const validateForm = () => {
    const { email, password } = values;
    if (email === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };
// THIS IS A FUNCTION FOR HANDLE SUBMIT
const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { email, password } = values;
      const { data } = await axios.post(loginRoute, {
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
    
  
      return (
        <>
        
          <FormContainer>
          <AnimatedPage>
            <form action="" onSubmit={(event) => handleSubmit(event)}>
              <div className="brand">
                <img src={Logo} alt="logo" />
                <h1>LOGIN</h1>
              </div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e)}
                min="3"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <button type="submit">Log In</button>
              <span>
                Don't have an account ? <Link to="/register">Create One.</Link>
              </span>
            </form>
            </AnimatedPage>
          </FormContainer>
          
          <ToastContainer />
        </>
      );
    }

    document.body.style.margin = "0px 0px 0px 0px";
    const FormContainer = styled.div`
      height: 45rem;
      width: 100%;
      max-width:100%;
      overflow-x:hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      align-items: center;
      background: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
      backgroundSize : "400% 400%";
      animation : "gradient 1s ease infinite";
      .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
        img {
          height: 5rem;
        }
        h1 {
          color: black;
          text-transform: uppercase;
        }
      }
    
      form {
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        gap: 2rem;
        background-color: #d9bcba;
        padding: 3rem 5rem;
        border: 5px solid transparent;
        border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
        border-image-slice: 1;
      }
      input {
        background-color: transparent;
        padding: 1rem;
        border: 0.1rem solid #4e0eff;
        border-radius: 0.4rem;
        color: black;
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
        color: black;
        text-transform: uppercase;
        a {
          color: #4e0eff;
          text-decoration: none;
          font-weight: bold;
        }
      }
      
      @keyframes gradient{
        0% {
            background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      };
    `;
