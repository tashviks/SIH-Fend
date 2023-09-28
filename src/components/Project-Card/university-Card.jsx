import Cards from './cards';
import '../../css/universitycard.css';

const universityCard = () => {
    return(
        <>
        <div className='university-card'>
            <a id="uniCard"></a>
            <h3>University Name</h3>
            <Cards/>
        </div>
        </>
    )
};

export default universityCard;