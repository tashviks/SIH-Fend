import React, {useState, useEffect, useRef} from 'react';
import '../../css/dropDownProfile.css';
import broken from "../../assets/broken.jpg"
import user from '../../assets/user.png';
import logout from '../../assets/log-out.png';
import question from '../../assets/question.png';
import add from '../../assets/add.png';
import settings from '../../assets/settings.png';
import { useNavigate } from 'react-router-dom';

const DropDownProfile = ()=>{
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    let menuRef = useRef();
  
    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpen(false);
          console.log(menuRef.current);
        }      
      };
  
      document.addEventListener("mousedown", handler);
      
  
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
  
    });
  
    return (
      <div className='drop-container'>
        <div className='menu-container' ref={menuRef}>
          <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <img src={broken} alt=""></img>
          </div>
  
          <div className={open ? 'temp active':'temp inactive'}>
          {/* <div className='temp'> */}
            <h3 id="username">Kaushal Buccha<br/><span>Website Designer</span></h3>
            <ul style={{padding:'2px'}}>
              <DropdownItem img = {user} text = {"My Profile"}route={"/userprofile"}/>
              <DropdownItem img = {add} text = {"Add Project"} route={"/addproject"}/>
              <DropdownItem img = {settings} text = {"Settings"}route={"/"}/>
              <DropdownItem img = {question} text = {"Helps"} route={"/"}/>
              <DropdownItem img = {logout} text = {"Logout"} route={"/"} onClick={()=> {localStorage.removeItem("loginCredentials")}} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  function DropdownItem(props){
    return(
      <li className = 'dropdownItem' onClick={props.onClick}>
        <img src={props.img} alt=''></img>
        <a href={props.route}> {props.text} </a>
      </li>
    );
  }
  
  export default DropDownProfile;