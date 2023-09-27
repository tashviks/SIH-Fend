import Footer from '../Footer/Footer.jsx';
import Unicards from '../Project-Card/university-Card.jsx';
import Canvas from '../Canvas/canvas.jsx';
import Tags from '../Main/Tags.jsx';
import '../../css/app.css';
import Topbar from '../Header/topbar.jsx';
import Search from '../Header/searchbar.jsx';

function Main() {
    return (
        <div>
            <Topbar/>
            {/* <Tags/> */}
            <Canvas/>
            <Search/>
            <Unicards/>
            <br/>
            <br/>
            {/* <Unicards/> */}
            <Footer/>
        </div>
    );
}

export default Main;