import "../../css/topbar.css";
import img from '../../assets/img1.jpg';
import {useState} from 'react';
import DropDownProfile from "./DropDownProfile";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
    const [topbarContainer,settopbarContainer] = useState(false);
    const navigate = useNavigate();
    const changeBackground=()=>{
        if(window.scrollY >= 80){
            settopbarContainer(true);
        }
        else{
            settopbarContainer(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
  return (
    <div className={topbarContainer ? 'topbarContainer active':'topbarContainer'}>
      <div className="topbarLeft">
        <span className={topbarContainer ? 'logo blk':'logo'}>ProjectiON</span>
      </div>
      <div className="topbarCenter">
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className={topbarContainer ? 'topbarLink blk':'topbarLink'}>Home</span>
          <span className={topbarContainer ? 'topbarLink blk':'topbarLink'}>Projects</span>
          <span className={topbarContainer ? 'topbarLink blk':'topbarLink'} onClick={() => {navigate("/register")}}>Register Student</span>
          <span className={topbarContainer ? 'topbarLink blk':'topbarLink'}>Contact Us</span>
        </div>
        <img src={img} alt="not found" className="topbarImg"/>
        <DropDownProfile/>
      </div>
    </div>
  );
}