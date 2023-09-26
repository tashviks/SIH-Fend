import Cards from './cards';
import '../../css/universitycard.css';

const universityCard = () => {
    return(
        <>
        <div className='university-card'>
            <h2>University Name</h2>
            <Cards/>
        </div>
        </>
    )
};

export default universityCard;