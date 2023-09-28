import React from 'react';
import '../../css/ReadMore.css';

const ReadMore = (props) => {
  return (props.trigger)?(
    <div className='popup'>
        <div className="popup-inner">
            <button className="close-btn" onClick={()=>props.setTrigger(false)}><bold>X</bold></button>
            {props.children}
        </div>
    </div>
  ) : "";
}
export default ReadMore
