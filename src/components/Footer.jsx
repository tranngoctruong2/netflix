import { TbWorld } from "react-icons/tb";
const Footer = () => {
    return ( <div className="w-full h-[300px] bg-black text-gray-400">
                <div className="px-12 py-5 ">
                    <p className="p-5">Bạn có câu hỏi? Liên hệ với chúng tôi.</p>
                    <div className="flex justify-between item-center max-w-[800px] px-5 text-sm">
                        <div>
                            <p className="cursor-pointer py-1">Câu hỏi thường gặp</p>
                            <p className="cursor-pointer py-1">Quan hệ với nhà đầu tư</p>
                            <p className="cursor-pointer py-1">Quyền riêng tư</p>
                            <p className="cursor-pointer py-1">Kiểm tra tốc độ</p>
                        </div>
                        <div>
                            <p className="cursor-pointer py-1">Trung tâm trợ giúp</p>
                            <p className="cursor-pointer py-1">Việc làm</p>
                            <p className="cursor-pointer py-1">Tùy chọn cookie</p>
                        </div>
                        <div>
                            <p className="cursor-pointer py-1">Tài khoản</p>
                            <p className="cursor-pointer py-1">Thông tin doanh nghiệp</p>
                        </div>
                    </div>
                    <div className="relative p-5">
                        <TbWorld className='w-6 absolute top-[25px]'/>
                        <select className='bg-transparent border text-white rounded pl-5 py-[2px] pr-1 mr-12 text-[14px] md:text-[18px]'>
                            <option  className='bg-gray-600'>Tiếng Việt</option>
                            <option className='bg-gray-600' >English</option>
                        </select>
                    </div>
                </div>

    </div> );
}
 
export default Footer;