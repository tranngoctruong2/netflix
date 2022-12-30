import { useState } from 'react';
import {Link} from 'react-router-dom'
import Contact from '../components/Footer';
// import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
// import {signInWithEmailAndPassword } from "firebase/auth";

const Sigin = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(false)
    const navitage = useNavigate()
    // const handleLogin = (e) => {
    //   e.preventDefault();
  
    //   signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       // Signed in
    //       const user = userCredential.user;
    //       console.log(user)
    //       navitage("/")
    //     })
    //     .catch((error) => {
    //       setError(true);
    //     });
    // };
     const handleLogin=()=>{
      if((email==="admin@gmail.com")&&(password==='123456')){
        navitage("/home")
      }else{
        setError(true)
      }
     }
    return ( 
        
      <>
      <div className='w-full h-screen'>
      <img className='absolute w-full h-screen object-cover' src={`https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png`} alt="" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='relative w-full px-4 py-24 z-50 '>
        <div className='w-full h-screen  absolute top-0 left-0 md:top-[50%] md:left-[33%] md:max-w-[450px] md:h-[500px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-8'>
            <h1 className='text-3xl px-0 text-center'>Đăng Nhập</h1>
            <form
               onClick={handleLogin}
              className='w-full flex flex-col py-4'
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2 bg-gray-700 rouded'
                type='email'
                placeholder='Email'
              
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 my-2 bg-gray-700 rouded'
                type='password'
                placeholder='Password'
                
              />
              <button className='bg-red-600 py-3 my-6 rounded font-bold '>
                Đăng Nhập
              </button>
              {error&&(<p className='text-red-500 text-[12px] py-2'>Email hoặc Mật Khẩu không đúng</p>)}
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p>
                  <input className='mr-2' type='checkbox' />
                  Ghi nhớ
                </p>
                <p>Bạn cần giúp dỡ?</p>
              </div>
              <p className='py-8'>
                <span className='text-gray-600'>
                Bạn mới tham gia Netflix?
                </span>{' '}<Link to='/login'>Đăng ký</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      
    </div>
    <Contact/>
      </>
     );
}
 
export default Sigin;