import Cards from './cards';
import '../../css/universitycard.css';

const universityCard = (props) => {
    return(
        <>
        <div className='university-card'>
            <h3>{props.uniname}</h3>
            <Cards/>
        </div>
        </>
    )
};

export default universityCard;