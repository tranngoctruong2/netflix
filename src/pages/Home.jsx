import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
    return ( <div>
        <Navbar></Navbar>
        <Main/>
        <Row rowID='1' title='Sắp tới' fetchURL={requests.requestUpcoming} />
        <Row rowID='2' title='Phổ Biến' fetchURL={requests.requestPopular} />
        <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowID='4' title='Xếp hạng' fetchURL={requests.requestTopRated} />
        <Row rowID='5' title='Kinh dị' fetchURL={requests.requestHorror} />
        <Footer/>
    </div> );
}
 
export default Home;