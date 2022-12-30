import axios from "axios";
import { useEffect,useState } from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const Row = ({title,fetchURL,rowID}) => {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        axios.get(fetchURL).then((response)=>setMovies(response.data.results))
    },[fetchURL])
    console.log(movies)
    const slideLeft = () => {
        var slider = document.getElementById(rowID);
        slider.scrollLeft = slider.scrollLeft - 240;
      };
      const slideRight = () => {
        var slider = document.getElementById(rowID);
        slider.scrollLeft = slider.scrollLeft + 240;
      };
    return ( 
        <>
        <div className="w-full mt-2">
            <h1 className="md:text-2xl ml-4">{title}</h1>
            <div className="w-full h-full relative items-center p-2">
            <div id={rowID} className=" overflow-hidden  whitespace-nowrap scroll-smooth ">
                <MdChevronLeft onClick={slideLeft} className= 'bg-white left-0 top-[35%] text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 '/>
                  {movies.map((movies)=>(
                    <div className=" w-[200px] md:w-[280px] relative inline-block">
                        <img className=" cursor-pointer object-cover px-2 md:px-4 hover:scale-[1.08]" src={`https://image.tmdb.org/t/p/w500/${movies?.backdrop_path}`} alt="" />
                        <div className=" absolute top-[35%] left-2 h-5 md:left-4 items-center">
                            <p className=" text-gray-300 text-[14px]">{movies?.title}</p>
                        </div>
                    </div>
                  ))}  
                <MdChevronRight onClick={slideRight} className="bg-white right-0 top-[35%] text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10"/>
            </div>
            </div>
           
        </div>
        </>
     );
}
 
export default Row;