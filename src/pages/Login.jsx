import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {TiTick} from 'react-icons/ti'
import Logo from '../assets/logo.svg.png'
const Login = () => {
    return ( 
        <div className="bg-white">
            <div className="w-full h-[100px]  px-[50px] py-[24px] flex justify-between items-center border-b-2 border-b-black/30 ">
                <Link to='/'> <img src={Logo} alt=""  width={140} className=''/></Link>
                <Link to='/sigin'><p className="cursor-pointer text-2xl text-black">Đăng Nhập</p></Link> 
            </div>
            <div className="w-full h-screen bg-white text-black mt-20">
                <div className="max-w-[300px] h-[500px] m-auto flex flex-col p-t-[300px]  ">
                    <div className="">
                        <div className="my-2" >
                            <TiTick size={42} className="text-red-500 m-auto p-1 border-[2px] rounded-full border-red-500"  />
                        </div>
                        <h1 className="text-center text-3xl">Chọn gói dịch vụ của bạn.</h1>
                         <div className="flex p-2 text-xl" >
                            <TiTick size={32} className="text-red-500"/>
                            <p>Không yêu cầu cam kết, hủy bất kỳ lúc nào.</p> 
                        </div>
                        <div className="flex p-2 text-xl">
                            <TiTick size={32} className="text-red-500"/>
                            <p>Mọi thứ trên Netflix chỉ với mức giá thấp.</p>
                        </div>
                        <div className="flex p-2 text-xl">
                        <TiTick size={32} className="text-red-500"/>
                        <p>Không quảng cáo, không phụ phí. Luôn luôn như vậy.
                        </p>
                        </div>

                    </div>
                    <button className="w-300px shadow-sm bg-red-600 text-3xl py-1 my-5 text-white rounded">Tiếp Theo</button>
                </div>

            </div>
            <Footer/>
        </div>
     );
}
 
export default Login;