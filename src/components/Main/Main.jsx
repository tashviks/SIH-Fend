import Footer from '../Footer/Footer.jsx';
import Unicards from '../Project-Card/university-Card.jsx';
import Canvas from '../Canvas/canvas.jsx';
import '../../css/app.css';
import TopbarLogin from '../Header/topbarLogin.jsx';
import Search from '../Header/searchbar.jsx';
import TopbarUni from '../Header/topbarUni.jsx';
import Topbar from '../Header/topbar.jsx';

function Main() {
    return (
        <div>
            {localStorage.getItem("loginCredentials") !== null ? JSON.parse(localStorage.getItem("loginCredentials")).univ === true ? <TopbarUni /> : <Topbar /> : <TopbarLogin/>}
            <Canvas/>
            <Search/>
            <Unicards uniname={"University 1"}/>
            <br/>
            <br/>
            <Unicards uniname={"University 2"}/>
            <Footer/>
        </div>
    );
}

export default Main;