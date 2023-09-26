import Footer from '../Footer/Footer.jsx';
import Unicards from '../Project-Card/university-Card.jsx';
import Canvas from '../Canvas/canvas.jsx';
import Tags from '../Main/Tags.jsx';
import Topbar from '../Header/topbar.jsx';

function Main() {
    return (
        <div>
            <Topbar/>
            {/* <Tags/> */}
            <Canvas/>
            <Unicards/>
            <br/>
            <br/>
            <Unicards/>
            <Footer/>
        </div>
    );
}

export default Main;