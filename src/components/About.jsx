const About = () => {
    return ( <>
    <div className="w-full h-[500px] flex flex-col md:flex-row justify-betwwen items-center px-20 py-12 border-gray-600 border-b-4 ">
        <div className=" mx-10 py-4">
            <p className="text-3xl text-center md:text-left md:text-5xl md:font-medium">Thưởng thức trên TV của bạn.</p>
            <p className="text-[10px] md:text-2xl "> Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.</p>
        </div>

        <div className="relative pt-10 md:pt-0">
            <img className="w-[240px] sm:w-[350px] md:w-[600px] object-cover " src={`https://techcrunch.com/wp-content/uploads/2017/04/netflix-tv-mockup.jpg?w=1390&crop=1`} alt="" />
            
        </div>

    </div>
    </> );
}
 
export default About;