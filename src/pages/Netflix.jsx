import Header from "../components/Header";
import {AiOutlineRight} from 'react-icons/ai'
import Footer from "../components/Footer";
import About from "../components/About";
import { Link } from "react-router-dom";

const Netflix = () => {
    return ( 
        <div>
            <Header/>
            <div className="w-full h-screen flex flex-col justify-center items-center border-gray-600 border-b-8">
                <div className="w-full h-full bg-gradient-to-b from-black/70 to-black/30 absolute"></div>
                <img className="w-full h-full object-cover" src={`https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png`} alt="" />
                <div className="absolute top-[30%] w-full">
                    <div className="flex flex-col text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl md:px-[200px]">Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.</h1>
                        <p className="text-2xl font-normal py-3">Xem ở mọi nơi. Hủy bất kỳ lúc nào.</p>
                        <p className="text-gray-100 px-1">Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center sm:flex-row md:flex-row">
                    <input type="email"  placeholder="Email" className="border-none w-[300px] my-2 p-3"/>
                    <Link to="/login"> <button className="bg-red-600 w-[130px] text-2xl font-medium p-2 flex item-center">Bắt Đầu<AiOutlineRight className="m-auto"/></button></Link>
                    </div>
                </div>

            </div>
            <About/>
            <Footer/>
        </div>
     );
}
 
export default Netflix;