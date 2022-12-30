import {TbWorld} from 'react-icons/tb'
import Logo from '../assets/logo.svg.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <div>
        <div className="flex w-full justify-between items-center absolute z-[100] px-[50px] py-[24px]" >
            <img width={140} src={Logo} alt="" />
            <div className=" flex items-center text-gray-100">
                <div>
                    <TbWorld className='w-6 absolute top-[40%]'/>
                    <select className='bg-transparent border text-white rounded pl-5 py-[2px] pr-1 mr-12 text-[14px] md:text-[18px]'>
                        <option  className='bg-gray-600'>Tiếng Việt</option>
                        <option className='bg-gray-600' >English</option>
                    </select>
                </div>
                <Link to='/sigin'>

                <button className="bg-red-600 px-2 py-[2px] rounded text-[14px] md:text-[18px]">Đăng Nhập</button>
                </Link>
            </div>
        </div>
        </div>
     );
}
 
export default Header;