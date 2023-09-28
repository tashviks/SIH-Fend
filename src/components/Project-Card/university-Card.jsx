import Cards from './cards';
import '../../css/universitycard.css';

const universityCard = () => {
    return(
        <>
        <div className='university-card'>
            <h3>University Name</h3>
            <Cards/>
        </div>
        </>
    )
};

export default universityCard;