import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';
import QZone from '../QZone';
import BG from '../BG';

const RightNav = () => {
    return (
        <div className='space-y-5'>
           <SocialLogin></SocialLogin>
           <FindUs></FindUs>
           <QZone></QZone>
           <BG></BG>

        </div>
    );
};

export default RightNav;