import React from 'react';
import image from '../../../resources/assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center mt-[20px] '>
            <img className='mx-auto' src={image} alt="" />
            <p className='text-[18px] py-2'>Journalism Without Fear or Favour</p>
            <p className='text-[18px]'>{moment().format("dddd, MMMM Do, YYYY")}</p>
        </div>
    );
};

export default Header;