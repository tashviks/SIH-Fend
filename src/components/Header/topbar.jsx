import "../../css/topbar.css";
import img from '../../assets/img1.jpg';
import {useState} from 'react';
import DropDownProfile from "./DropDownProfile";
import { useNavigate } from "react-router";

export default function Topbar() {
    const [topbarContainer,settopbarContainer] = useState(false);
    const navigate = useNavigate();
    const changeBackground=()=>{
        if(window.scrollY >= 1000){
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
        <span className={topbarContainer ? 'logo blk':'logo'} onClick={() => {navigate("/")}}>ProjectiON</span>
      </div>
      <div className="topbarCenter">
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className={topbarContainer ? 'topbarLink blk':'topbarLink'} onClick={() => {navigate("/")}}>Home</span>
          <span className={topbarContainer ? 'topbarLink blk':'topbarLink'} href="#uniCard">Projects</span>
          <span className={topbarContainer ? 'topbarLink blk':'topbarLink'}>About Us</span>
          <span className={topbarContainer ? 'topbarLink blk':'topbarLink'}>Contact Us</span>
        </div>
        <img src={img} alt="not found" className="topbarImg"/>
        <DropDownProfile/>
      </div>
    </div>
  );
}