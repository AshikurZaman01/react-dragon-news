import React from 'react';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className='flex my-2'>
            <button className='btn btn-secondary'>Breaking News</button>
            <Marquee>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;