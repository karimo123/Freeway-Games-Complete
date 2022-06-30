import React from 'react';

const Benefit = ( {icon,title,para}) => {
    return (
        <div className="benefit">
            <div className="benefit__img">
                {icon}
            </div>
            <h3 className="benefit__subtitle">
                {title}
            </h3>
            <p className="benefit__para">
                {para}
            </p>
        </div>
    );
}

export default Benefit;
