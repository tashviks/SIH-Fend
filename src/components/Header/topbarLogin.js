import "../../css/topbar.css";
import {useState} from 'react';

export default function Topbar() {
    const [topbarContainer,settopbarContainer] = useState(false);
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
          <span className={topbarContainer ? 'topbarLink blk':'topbarLink'}>About Us</span>
          <span className={topbarContainer ? 'topbarLink blk':'topbarLink'}>Contact Us</span>
        </div>
      </div>
      <button class="log">Login</button>
    </div>
  );
}