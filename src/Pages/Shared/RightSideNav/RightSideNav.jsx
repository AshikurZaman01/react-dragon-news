import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub , AiOutlineTwitter , AiOutlineInstagram} from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import qZone1 from '../../../resources/assets/qZone1.png';
import qZone2 from '../../../resources/assets/qZone2.png';
import qZone3 from '../../../resources/assets/qZone3.png';
import bg1 from '../../../resources/assets/bg1.png';


const RightSideNav = () => {
    return (
        <div>
           <div className='space-y-3 my-3 px-4'>
                <h2 className='text-3xl'>Login With</h2>
                <button className=' flex items-center gap-1 justify-center w-full border-blue-400 border rounded'><FcGoogle></FcGoogle> Login With Google</button>

                <button className='flex items-center gap-1 justify-center w-full border-black border rounded'><AiFillGithub></AiFillGithub> Login With Github</button>
           </div>

           <div className='space-y-3 my-3 mt-10 px-4'>
                <h2 className='text-3xl'>Find Us On</h2>
                    
                    <div className='text-2xl px-6 space-y-0'>
                        <a href="" className='flex items-center gap-4 border rounded-t-lg px-4 '><BiLogoFacebook></BiLogoFacebook>Facebook</a>
                        <a href="" className='flex items-center gap-4 border-x px-4 '><AiOutlineTwitter></AiOutlineTwitter>Twitter</a>
                        <a href="" className='flex items-center gap-4 border rounded-b-lg px-4 '><AiOutlineInstagram></AiOutlineInstagram>Instagram</a>
                    </div>
           </div>

           <div className='space-y-3 my-3 mt-10 px-4'>
                <h2 className='text-3xl'>Q Zone</h2>

                    <div>
                        <img src={qZone1} alt="" />
                        <img src={qZone2} alt="" />
                        <img src={qZone3} alt="" />
                        <img src={bg1} alt="" />
                    </div>
           </div>

        </div>
    );
};

export default RightSideNav;