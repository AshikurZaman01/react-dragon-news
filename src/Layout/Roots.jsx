import React from 'react';
import { Outlet } from 'react-router-dom';

const Roots = () => {
    return (
        <div className='max-w-[1140px] mx-auto font-popins'>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;