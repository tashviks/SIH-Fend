import React, {useState, useEffect, useRef} from 'react';
import '../../css/dropDownProfile.css';
import broken from "../../assets/broken.jpg"
import user from '../../assets/user.png';
import logout from '../../assets/log-out.png';
import question from '../../assets/question.png';
import settings from '../../assets/settings.png';
const DropDownProfile = ()=>{
    const [open, setOpen] = useState(false);

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
              <DropdownItem img = {user} text = {"My Profile"}/>
              <DropdownItem img = {settings} text = {"Settings"}/>
              <DropdownItem img = {question} text = {"Helps"}/>
              <DropdownItem img = {logout} text = {"Logout"}/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <img src={props.img} alt=''></img>
        <a href='/'> {props.text} </a>
      </li>
    );
  }
  
  export default DropDownProfile;