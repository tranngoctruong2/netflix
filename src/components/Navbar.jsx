import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'
import Logo from '../assets/logo.svg.png'
import { useEffect,useState } from 'react';
import {BsPeople} from 'react-icons/bs'
const Navbar = () => {
    const [show,setShow] = useState(false);
    const [dropdown,setDropdown]=useState(false);
    const handleDrop =()=>setDropdown(!dropdown);
    const NavbarVis = ()=>{
        if(window.scrollY >50) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }
    const scrolltoTop=()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth' 
        })
    }
    useEffect(()=>{
        window.addEventListener("scroll",NavbarVis)
        return ()=> window.removeEventListener("scroll",NavbarVis)
    },[])
    
    return ( 
        
            <div className={`flex fixed z-50 p w-full justify-between items-center px-[50px] py-[24px] ${show && 'bg-black/90'}`}>
                <img className='cursor-pointer' width='140px' src={Logo} alt="" />
                <div className='flex justify-center items-center'>
                    <BsPeople size={28} className='cursor-pointer mx-16 relative' onClick={handleDrop} />
                    {dropdown&&(<div className='absolute w-[100px] h-[55px] mt-[90px] bg-slate-400 shadow-lg rounded-sm'>
                     <Link to='/'> <p className='text-center border-b-2 border-black/30'>Đăng Xuất</p></Link>  
                        <p className='text-center'>Thông Tin</p>
                    </div>)}
                    <AiOutlineHome size={28} className='cursor-pointer' onClick={scrolltoTop}/>
                </div>
                
            </div>
        
     );
}
 
export default Navbar;